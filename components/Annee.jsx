"use client"


import Image from "next/image"
import { motion } from 'framer-motion'
import ReactAudioPlayer from "react-audio-player";
import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Ani from "@/public/check.json";
import fal from "@/public/false.json";
import Lottie from 'lottie-react';
import { useRouter } from "next/navigation";

export const Annee = ({ annee,locale }) => {
    const [qs, setQS] = useState({
        2000: {
            q1: {
                audio: "/audio/nasmla7city.mp3",
                cost: 10,
                answers: [
                    { id: 1, title: { fr: "dmou3 el oumahat", ar: "دموع الأمهات" }, correct: false },
                    { id: 2, title: { fr: "el badra", ar: "البدره" }, correct: false },
                    { id: 3, title: { fr: "nas melah city", ar: "ناس ملاح سيتي" }, correct: true }
                ]
            },
            q2: {
                audio: "/audio/maktoub.mp3",
                cost: 15,
                answers: [
                    { id: 1, title: { fr: "el chouhra", ar: "الشهرة" }, correct: false },
                    { id: 2, title: { fr: "jirah el Ayam", ar: "جراح الأيام" }, correct: false },
                    { id: 3, title: { fr: "el maktoub", ar: "المكتوب" }, correct: true }
                ]
            },
            q3: {
                audio: "/audio/bla7doud.mp3",
                cost: 20,
                answers: [
                    { id: 1, title: { fr: "el michwar", ar: "المشوار" }, correct: false },
                    { id: 2, title: { fr: "bila houdoud", ar: "بلا حدود" }, correct: true },
                    { id: 3, title: { fr: "taman el houlem", ar: "ثمن الحلم" }, correct: false }
                ]
            }
        },
        2010: {
            q1: {
                audio: "/audio/hadjelakhder.mp3",
                cost: 10,
                answers: [
                    { id: 1, title: { fr: "dikra el akhira", ar: "ذكرى الأخيرة" }, correct: false },
                    { id: 2, title: { fr: "yab9a el amel", ar: "يبقى الأمل" }, correct: false },
                    { id: 3, title: { fr: "hadja lakhder", ar: "حاجة لخضر" }, correct: true }
                ]
            },
            q2: {
                audio: "/audio/bahdja.mp3",
                cost: 15,
                answers: [
                    { id: 1, title: { fr: "Samet el abriyaa", ar: "صمت الأبرياء" }, correct: false },
                    { id: 2, title: { fr: "dar el bahdja", ar: "دار البهجة" }, correct: true },
                    { id: 3, title: { fr: "el firka zar9a", ar: "الفرقة الزرقاء" }, correct: false }
                ]
            },
            q3: {
                audio: "/audio/jam3ifamily.mp3",
                cost: 20,
                answers: [
                    { id: 1, title: { fr: "el la3ib", ar: "اللاعب" }, correct: false },
                    { id: 2, title: { fr: "Ouled el houma", ar: "أولاد الحومة" }, correct: false },
                    { id: 3, title: { fr: "djam3i family", ar: "الجمعي فاميلي" }, correct: true }
                ]
            }
        },
        2020: {
            q1: {
                audio: "/audio/3achour.mp3",
                cost: 10,
                answers: [
                    { id: 1, title: { fr: "ahwal el nas", ar: "أحوال الناس" }, correct: false },
                    { id: 2, title: { fr: "da9yous makyous", ar: "دقيوس مقيوس" }, correct: false },
                    { id: 3, title: { fr: "3achour el 3acher", ar: "عاشور العاشر" }, correct: true }
                ]
            },
            q2: {
                audio: "/audio/babour.mp3",
                cost: 15,
                answers: [
                    { id: 1, title: { fr: "liyam", ar: "اليام" }, correct: false },
                    { id: 2, title: { fr: "babour el louh", ar: "بابور اللوح" }, correct: true },
                    { id: 3, title: { fr: "bent el blade", ar: "بنت البلاد" }, correct: false }
                ]
            },
            q3: {
                audio: "/audio/timoucha.mp3",
                cost: 20,
                answers: [
                    { id: 1, title: { fr: "dama", ar: "داما" }, correct: false },
                    { id: 2, title: { fr: "yemak", ar: "يماك" }, correct: false },
                    { id: 3, title: { fr: "timoucha", ar: "تيموشا" }, correct: true }
                ]
            }
        }
    });

    const langs = {
        submit: { ar: "تأكيد", fr: "Confirmer" },
        q: { ar: "السؤال ", fr: "Question " },
        point: { ar: "نقطة", fr: "points" },
        correct: { ar: "اجابة صحيحة", fr: "Réponse correcte" },
        wrong: { ar: "اجابة خاطئة", fr: "Réponse incorrecte" },
        total: { ar: "المجموع", fr: "Total" },
        jouer: { ar: "العب مرة أخرى", fr: "Jouer encore" },
        fail:{ar:"لقد خسرت",fr:"Vous avez perdu"},
        win:{ar:"لقد ربحت",fr:"Vous avez gagné"},
    }
    
    const answerStatus = { true: { ar: "اجابة صحيحة", fr: "Réponse correcte" }, false: { ar: "اجابة خاطئة", fr: "Réponse incorrecte" } }

    const [current, setCurrent] = useState("q1")
    const [canPass, setCanPass] = useState(false);
    const [final, setFinal] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [answer, setAnswer] = useState(null);

    const selectAnswer = (id) => {
        setQS({
            ...qs,
            [annee]: {
                ...qs[annee],
                [current]: {
                    ...qs[annee][current],
                    answers: qs[annee][current].answers.map((a) => {
                        if (a.id == id) {
                            return { ...a, current: true }
                        }
                        return { ...a, current: false }
                    })
                }
            }
        })
        setAnswer(qs[annee][current]?.answers?.find(a => a.id == id))
        setCanPass(true);
    }

    const NextQst = (id) => {
        if (canPass) {
            let keys = Object.keys(qs[annee])
            let index = keys.indexOf(current)

            if (index < keys.length - 1) {
                setCurrent(keys[index + 1])
                setAnswers([...answers, { cost: qs[annee][current].cost, correct: answer?.correct }])
                setAnswer(null)
            } else {
                setAnswers([...answers, { cost: qs[annee][current].cost, correct: answer?.correct }])
                setAnswer(null)
                setFinal(true);

            }
        }
    }

    const router = useRouter()


    const JouerEncor = () => {
        router.push("/")
    }
    return (
        <div className='relative w-screen h-screen bg-gradient-to-br from-[#FCD60C] to-[#e7c503] flex flex-col justify-center items-center'>
            <Image src={"/images/logo2.png"} width={500} height={500} className='a absolute top-0 left-0 m-6 w-32 h-32  lg:w-40 lg:h-40' />
            {
                !final ?
                    <>
                        <h1 className="text-5xl lg:text-[8rem] font-bold uppercase">{current}</h1>
                        <div className="w-full flex flex-col items-center justify-center ">
                            <Image src={`/images/${current}.png`} width={500} height={500} className='rounded-full !shadow-[0_0.15rem_1.25rem_#000000]  object-cover m-6 w-20 h-20' />
                            {/* <Typography variant="h6">??</Typography> */}
                            <ReactAudioPlayer
                                src={qs[annee][current]?.audio} // Replace with your audio file path
                                controls
                            />
                        </div>
                        <div className=' w-full lg:w-2/3 mt-12 flex flex-col md:flex-row justify-center items-center gap-6'>
                            {
                                qs[annee][current]?.answers?.map((answer, index) => (
                                    <button key={index} onClick={() => selectAnswer(index + 1)} className={`w-60 flex hover:shadow-lg items-center py-3 bg-white rounded-xl px-4 gap-4 ${answer?.current ? " bg-gradient-to-b from-blue-500 to-blue-400 text-white" : "bg-white text-neutral-700"} `}>
                                        <span className={`w-12 h-12 font-bold text-xl  flex justify-center items-center rounded-full  ${answer?.current ? "bg-white text-blue-500" : "bg-yellow-300/30 text-[#FCD60C]"}`}>
                                            0{index + 1}
                                        </span>
                                        <p className=' text-start  font-bold'>{answer?.title[locale]}</p>
                                    </button>
                                ))
                            }
                        </div>
                        <button onClick={NextQst} className="px-6 py-3 text-xl hover:shadow-sm hover:shadow-white border border-white text-white mt-8 rounded-full">
                            {langs.submit[locale]}
                        </button>
                    </>
                    :
                    <div dir={locale == "ar" ? "rtl":"ltr"} className="flex flex-col items-center justify-center">
                        <Lottie className='w-60 h-60' animationData={answers?.filter(item => item?.correct).length > 1 ? Ani : fal} loop={false} />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, }}
                            transition={{ delay: 2.5, duration: 0.8 }}
                            className='absolute flex flex-col items-center  justify-center'
                        >
                            <Image src={"/images/bg2.png"} width={1980} height={1080} className='w-60 h-40 mb-6 ' />
                            <h1 className='text-2xl  text-neutral-800 font-bold'>{answers?.filter(item => item?.correct).length > 1 ? langs?.win[locale] : langs?.fail[locale]}</h1>
                            {
                                answers.map((answer, index) => (
                                    <p className="mt-4 w-60  md:w-96 rounded-xl p-4 bg-white "><span className="text-xl font-bold">{langs?.q[locale]} {index + 1} :</span> {answer?.correct ? answerStatus?.true[locale] : answerStatus?.false[locale]}</p>
                                ))
                            }
                            <p className="mt-4 w-60 md:w-96 rounded-xl p-4 bg-white "><span className="text-xl font-bold">{langs?.total[locale]}  :</span> {answers?.filter(item => item?.correct).length} {langs?.point[locale]}</p>

                            <button onClick={JouerEncor} className="px-6 py-3 text-xl hover:shadow-sm hover:shadow-white border border-white text-white mt-8 rounded-full">
                                {langs.jouer[locale]}
                            </button>

                        </motion.div>
                    </div>
            }
        </div>
    )
}
