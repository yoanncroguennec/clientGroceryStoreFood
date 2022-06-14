import React from 'react'
import { Typography } from '@mui/material'
// COMPONENTS
import listCookiesAllow from '../../data/footer/dataCookiePolicy'
// ROUTES
import Navbar from '../../routes/navbar/Index'
import Footer from '../../routes/Footer'



export default function CookiePolicy() {

  return (
    <div>

        <Navbar />

        <Typography variant='h4' sx={{marginBottom: 5, fontWeight: "bold"}}>
            Politique de cookies
        </Typography>

        <Typography variant='h5' sx={{marginBottom: 2, fontWeight: "bold"}}>
            Politique de collecte de données et de gestion des cookies
        </Typography>



        {/* SECTION TEXT COOKIE_POLICY */}
        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            L'utilisation des Cookies lors de sa visite sur le Site
        </Typography>

        <Typography>
           Pour permettre aux utilisateurs du Site de bénéficier des services proposés par celui-ci [tels que – et si celui le propose : achats de produits, consultation, inscriptions aux services proposés etc.. ], de l’optimisation de son utilisation et de sa personnalisation (notamment personnalisation des offres et des publicités) en fonction de l’utilisateur, le Site utilise des Cookies. Tant que le Client/Utilisateur du Site ne décide pas de désactiver les cookies, il accepte que le Site puisse les utiliser. Il peut à tout moment désactiver ces cookies, et ce gratuitement, à partir des possibilités de désactivation qui lui sont offertes et rappelées ci-après, sachant que cela peut réduire ou empêcher l’accessibilité à tout ou partie des Services proposés Services proposés par le Site.
        </Typography>

        <Typography variant='h6' sx={{marginTop: 1, marginBottom: 1}}>
            Cookies - Définition et utilité
        </Typography>

        <Typography>
            Lors de la consultation du Site par le Client/Utilisateur, des informations relatives à la navigation de son terminal (ordinateur, tablette, smartphone, etc.) sur le Site peuvent être enregistrées dans des fichiers texte appelés "Cookies", installés sur son navigateur. Les Cookies vont être utilisés pour reconnaître le navigateur du Client/Utilisateur pendant la durée de validité du Cookie concerné.
            Seul l'émetteur du Cookie concerné est susceptible de lire ou de modifier les informations qui y sont contenues.
            Certains Cookies sont indispensables à lutilisation du Site, dautres permettent doptimiser l’utilisation du Site et de personnaliser les contenus affichés. Ainsi les Cookies permettent :

            <ul>
                {listCookiesAllow.map((CookieAllow) => {
                   return(
                        <Typography>
                            {CookieAllow.id} - {CookieAllow.sentence}
                        </Typography>
                    )
                })}
            </ul>
        </Typography>

        <Typography>
            Lorsque le Client accède à un site tiers contenant des espaces publicitaires diffusant une des annonces publicitaires du Site, cette annonce peut être adressée au Client via la reconnaissance d’un des Cookies précédemment déposés par le Site sur le navigateur du Client. Ces cookies peuvent être posés par des prestataires techniques du Site et utilisés.
        </Typography>

        <Typography variant='h6' sx={{marginTop: 1, marginBottom: 1}}>
            Les cookies déposés par un tiers sur des espaces du site
        </Typography>

        <Typography>
            Le Site est susceptible de contenir des Cookies émis par des tiers (agence de communication, société de mesure d'audience, prestataire de publicité ciblée, etc.) permettant à ces derniers, pendant la durée de validité de leurs Cookies :
        </Typography>

        <Typography>
            <ul>
                <Typography>
                    1 - De recueillir des informations de navigation relatives aux navigateurs consultant le Site,
                </Typography>
                <Typography>
                    2 - De déterminer les contenus publicitaires susceptibles de correspondre aux centres d’intérêts du Client pour lui adresser des publicités ciblées, au regard de son historique de navigation collecté par le tiers.
                </Typography>                
            </ul>
        </Typography>

        <Typography>
            A tout moment le Client pourra empêcher la collecte d’information le concernant via ces Cookies tiers, en cliquant sur les liens correspondant (voir le chapitre sur la gestion et l’utilisation des cookies par le Client).
        </Typography>

        <Typography variant='h6' sx={{marginTop: 1, marginBottom: 1}}>
            L'émission et l'utilisation de Cookies par ces entreprises sont soumises à leurs propres conditions d’utilisation.
        </Typography>

        <Typography variant='h6' sx={{marginTop: 1, marginBottom: 1}}>
            Les cookies intégrés à des applications tierces sur le site
        </Typography>

        <Typography>
           Le Site est susceptible d'inclure sur le Site des applications informatiques émanant de tiers, qui permettent au Client de partager des contenus du Site avec d'autres personnes ou de faire connaître à ces autres personnes les consultations ou opinions du Client concernant un contenu du Site. Tel est notamment le cas des boutons "Partager", "J'aime", issus de réseaux sociaux tels que Facebook "Twitter" « viadéo », etc.
        </Typography>

        <Typography>
           Le réseau social est susceptible d’identifier le Client grâce à ce bouton, même s’il ne l'a pas utilisé lors de sa consultation du Site. Ce type de bouton applicatif peut permettre au réseau social concerné de suivre la navigation du Client sur le Site, du seul fait que son compte au réseau social était activé sur son navigateur (session ouverte) durant la navigation en question.
        </Typography>


        <Typography>
           Le Site ne dispose d’aucun contrôle sur le processus employé par les réseaux sociaux pour collecter des informations relatives à la navigation du Client sur le Site et associées aux données personnelles dont ils disposent.
        </Typography>

        <Typography>
           Le Site recommande de consulter les conditions d’utilisation de ses données sur ces réseaux sociaux pour connaissance les finalités d'utilisation, notamment publicitaires, les informations de navigation qu'ils peuvent recueillir grâce à ces boutons applicatifs. Il convient pour le Client de s’assurer que les conditions d’utilisation de ces réseaux sociaux peuvent lui permettre d’encadrer et de restreindre l’utilisation de ses données par ces réseaux sociaux, notamment en paramétrant ses comptes d'utilisation auprès de ces derniers.
        </Typography>

        <Typography variant='h6' sx={{marginTop: 1, marginBottom: 1}}>
            Partage de l'utilisation du terminal du client avec d'autres personnes
        </Typography>

        <Typography>
           Si le terminal du Client est utilisé par plusieurs personnes et lorsqu'un même terminal dispose de plusieurs logiciels de navigation, le Site ne peut pas s’assurer de manière certaine que les services et publicités destinés au terminal correspondent bien à l’utilisation propre par le Client de ce terminal et non à celle d'un autre utilisateur de ce terminal.
            Le partage avec d'autres personnes de l'utilisation du terminal du Client et la configuration des paramètres de son navigateur à l'égard des Cookies, relèvent de son libre choix et de sa responsabilité.
        </Typography>

        <Typography variant='h6' sx={{marginTop: 1, marginBottom: 1}}>
            La gestion et l’utilisation des cookies par le client
        </Typography>

        <Typography>
            Le Client peut gérer et modifier à tout moment l’utilisation des Cookies suivant les possibilités rappelées ci-après.
            Les paramétrages que le Client effectuera sont susceptibles de modifier sa navigation sur internet et ses conditions d’accès et d’utilisation de certains services du Site qui nécessitent l’utilisation de cookies.
            Ainsi le Client peut gérer ses Cookies :
        </Typography>

        <ul>
            <Typography>
                1 - A partir de son logiciel de navigation, ou
            </Typography>
            <Typography>
                2 - De plateformes interprofessionnelles, ou
            </Typography>                
            <Typography>
                3 - Lorsque cela lui est proposé à partir d’un lien présent dans la liste ci-dessous.
            </Typography>        
        </ul>

        <Typography>
            Attention : la prise en compte de la désinscription du Client repose sur un cookie. Par conséquent, s’il désactive tous les cookies de son terminal ou s’il change de terminal, le Site ne saura plus que le Client a choisi cette option.
        </Typography>

        <Typography variant='h6' sx={{marginTop: 1, marginBottom: 1}}>
            Gestion des cookies du Client à partir de son logiciel de navigation :
        </Typography>

        <Typography>
           Le Client peut configurer son logiciel de navigation de manière à ce que des Cookies soient enregistrés dans son terminal ou qu'ils soient rejetés, soit systématiquement, soit selon leur émetteur.
        </Typography>

        <Typography>
          Pour connaître les modalités applicables à la gestion des cookies stockés dans son navigateur, le Vendeur invite le Client à consulter le menu d'aide de son navigateur ainsi que la rubrique « Vos traces » du site de la CNIL (Commission Nationale de l’Informatique & des Libertés) (http://www.cnil.fr/vos-libertes/vos-traces/les-cookies/). 
        </Typography>

        <Typography variant='h6' sx={{marginTop: 1, marginBottom: 1}}>
            Gestion en ligne des cookies du Client à partir de plateformes interprofessionnelles :
        </Typography>

        <Typography>
           Le Client peut également se connecter sur des plateformes, regroupant des professionnels de la publicité digitale qui permettent de connaître les entreprises inscrites à ces plate-formes et qui leur offrent la possibilité de refuser ou d'accepter les Cookies qu'elles utilisent pour adapter, selon qu’elles collectent, les publicités susceptibles d'être affichées sur son navigateur.
        </Typography>

        <Typography>
           Cette plate-forme européenne est une interface centralisée qui permet au Client d'exprimer son refus ou son acceptation des Cookies de tel ou tel professionnel.
        </Typography>

        <Typography>
           Cette procédure n'empêchera pas l'affichage de publicités sur les sites Internet que le Client visite. Elle ne bloquera que les technologies qui permettent d'adapter des publicités à ses centres d'intérêts.
        </Typography>

        <Typography variant='h6' sx={{marginTop: 1, marginBottom: 1}}>
            Gestion de vos cookies à partir de la liste ci-après
        </Typography>

        <Typography>
           ContentSquare est une solution qui agrège des données de fréquentation et d’usage dans le but d’améliorer l’expérience utilisateur. Les statistiques produites sont anonymes. Pour être exclu du suivi, veuillez cliquer ici.
        </Typography>

        <Typography>
           Nous pourrons également vous proposer (dès que cette option sera active) de cliquer sur les liens afin de désactiver la collecte d’information vous concernant lors de votre navigation sur notre Site, par les détenteurs des cookies correspondant. Par ce lien vous serez directement dirigé sur le site de l’entreprise concernée qui est seule responsable de la prise en compte de votre demande.
        </Typography>
        
        <Footer />
    </div>
  )
}
