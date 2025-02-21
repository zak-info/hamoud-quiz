"use server";

import { connect } from "@/models/mongodb";
import Unity from "@/models/unity.model";
import { revalidatePath } from "next/cache";


export async function createUnity(data) {
    try {
        await connect();
        const unity = await Unity.create(data);
        revalidatePath("/panel/admin");
        return { success: true, status: 201, unity };
    } catch (error) {
        console.log(error);
    }
}



export async function getStatistics() {
    await connect();
    const stats = await Unity.aggregate([
        {
            $group: {
                _id: {
                    year: { $year: "$createdAt" },
                    month: { $month: "$createdAt" },
                    day: { $dayOfMonth: "$createdAt" }
                },
                nbtries: { $sum: 1 }, // Count total attempts
                nbsuccess: {
                    $sum: {
                        $cond: [{ $eq: ["$success", "true"] }, 1, 0]
                    }
                },
                nbfails: {
                    $sum: {
                        $cond: [{ $eq: ["$success", "false"] }, 1, 0]
                    }
                },
                points: {
                    $push: "$points" // Collect all points values
                }
            }
        },
        {
            $project: {
                _id: 0,
                date: {
                    $concat: [
                        { $toString: "$_id.year" }, "_",
                        { $toString: { $cond: { if: { $lt: ["$_id.month", 10] }, then: { $concat: ["0", { $toString: "$_id.month" }] }, else: { $toString: "$_id.month" } } } }, "_",
                        { $toString: { $cond: { if: { $lt: ["$_id.day", 10] }, then: { $concat: ["0", { $toString: "$_id.day" }] }, else: { $toString: "$_id.day" } } } }
                    ]
                },
                nbtries: 1,
                nbsuccess: 1,
                nbfails: 1,
                points: 1
            }
        }
    ]);

    // Transform array into the desired object structure
    const result = {};
    stats.forEach(stat => {
        result[stat.date] = {
            nbtries: stat.nbtries,
            nbsuccess: stat.nbsuccess,
            nbfails: stat.nbfails,
            points: stat.points.reduce((acc, p) => {
                acc[p] = (acc[p] || 0) + 1;
                return acc;
            }, {})
        };
    });

    console.log(result);
    return result;
}
