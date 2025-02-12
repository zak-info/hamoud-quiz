import { Annee } from '@/components/Annee'
import { useLocale } from 'next-intl';


export default function page({params}){
   const locale = useLocale();
  return (
    <Annee annee={params?.annee} locale={locale} />
  )
}
