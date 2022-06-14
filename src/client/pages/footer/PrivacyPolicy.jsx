import { Typography } from '@mui/material'
import React from 'react'
// DATA
import listTreatmentsInclude from '../../data/footer/dataPrivacyPolicy'



export default function PrivacyPolicy() {
  return (
    <div>
        <Typography variant='h4' sx={{marginBottom: 5, fontWeight: "bold"}}>
            Politique de protection des données
        </Typography>

        <Typography variant='h5' sx={{marginBottom: 2, fontWeight: "bold"}}>
            Politique de confidentialité et de protection des données
        </Typography>



        {/* SECTION TEXT PRIVATY_POLICY */}
        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            QUI TRAITE VOS DONNEES ?
        </Typography>

        <Typography>
           LA FOURCHE, Société par Actions Simplifiée, au capital de 30 000 euros dont le siège social est situé à La Breuille, 36400, NOHANT-VIC, immatriculée au Registre du Commerce et des Sociétés de Châteauroux sous le n° 839 765 062 traite les données collectées vous concernant, et est responsable des traitements des données à caractère personnel pour toute collecte de données vous concernant en relation avec les services proposés par LA FOURCHE..
        </Typography>

        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            POUR QUELLES FINALITES COLLECTONS NOUS ET TRAITONS NOUS VOS DONNEES ?
        </Typography>
        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            LA FOURCHE collecte et traite les données vous concernant pour les finalités listées ci-après et détaillées ci-dessous :
        </Typography>

        <Typography>
           En premier lieu, elles sont utilisées pour les besoins de la gestion de la relation clients et pour nous permettre de mieux interagir avec nos clients, d’optimiser l’expérience utilisateur ou encore de répondre aux demandes et éventuelles réclamations de nos clients. 
        </Typography>

        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
           Ces traitements incluent notamment :
        </Typography>

        <ul>
          {listTreatmentsInclude.map((CookieAllow) => {
            return(
              <Typography>
                {CookieAllow.id} - {CookieAllow.sentence}
              </Typography>
            )
          })}
        </ul>

        <Typography>
          Pour les opérations de prospection commerciale liée au profilage et qui reposent sur le consentement de la personne concernée par le traitement, celle-ci peut retirer à tout moment son consentement étant entendu que cela ne remettra pas en cause la licéité du traitement mis en œuvre avant cette révocation.
        </Typography>

        <Typography>
          Vos données sont susceptibles d’être utilisées pour la réalisation d’opérations techniques liées aux traitements de vos données personnelles, pour les besoins des finalités énoncées aux présentes. Cela inclut :
        </Typography>

        <ul>
            <Typography>
                1 - Les opérations techniques liées au redressement d’adresses ;
            </Typography>
            <Typography>
                2 - L’attribution d’un identifiant numérique lié à vos données, afin que nous puissions interagir avec vous via différents supports de communication numérique (sites internet et applications mobiles, réseaux sociaux) y compris pour vous adresser des publicités ciblées,
            </Typography>                
            <Typography>
                3 - Les opérations techniques, organisationnelles ou de cybersécurité liées à la détection d’anomalie et à la sécurisation de vos données ainsi que de nos systèmes d’information à partir desquels vos données sont traitées.
            </Typography>        
        </ul>

        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            POURQUOI LES TRAITEMENTS DE VOS DONNEES A CARACTERE PERSONNEL ONT-ILS LIEU ?
        </Typography> 


        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            Vos données pourront faire l'objet d'un traitement pour l'une ou plusieurs des raisons suivantes :
        </Typography> 

        <ul>
            <Typography>
                1 - Parce que cela est nécessaire pour fournir les services de LA FOURCHE.
            </Typography>
            <Typography>
                2 - Dans le cadre de l'accord que vous aurez éventuellement formulé, par exemple pour nous permettre de communiquer auprès de vous sur nos offres et produits ou celles d’annonceurs tiers ;
            </Typography>                
            <Typography>
                3 - Dans le respect des intérêts, libertés et droits fondamentaux des personnes inscrites aux services de LA FOURCHE parce que cela est nécessaire pour nous permettre à nous ou à nos partenaires de poursuivre nos intérêts légitimes tels que fidéliser notre clientèle, gérer de manière optimale notre relation avec nos clients, mieux les connaître et promouvoir auprès d'eux nos produits et services ou encore lutter contre la fraude et assurer notre défense en cas de contentieux.
            </Typography>        
        </ul>
 
        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            QUELLES DONNEES COLLECTONS - NOUS ?
        </Typography> 

        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            Les données traitées dans le cadre LA FOURCHE sont issues :
        </Typography> 

        {/* <ul>
          {listProcessedData.map((ProcessedData) => {
            return(
              <Typography>
                {ProcessedData.id} - {ProcessedData.sentence}
              </Typography>
            )
          })}
        </ul> */}

        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            QUI SERA SUSCEPTIBLE D’ACCEDER A VOS DONNEES ?
        </Typography> 

        <Typography>
          Pour atteindre les finalités décrites ci-dessus et dans les limites nécessaires à la poursuite de ces finalités, vos données pourront être transmises à tout ou partie des destinataires suivants :
        </Typography>


*) personnes habilitées des services concernés au sein de la société LA FOURCHE (ex: services en charge du marketing, des études et analyses, des panels de consommateurs, du service clients, du contentieux, des affaires comptables et fiscales ou de l’informatique et de la sécurité des systèmes d’informations) ;

*) aux prestataires de paiement et prestataires de recouvrement des sommes que vous pourriez éventuellement devoir,

*) les prestataires et sous-traitants de la société LA FOURCHE (ex: prestataires informatiques, prestataires intervenant dans le secteur de la publicité) ;

*) les annonceurs ou marques partenaires, mais dans ce cas ces derniers n’ont pas accès ni directement ni indirectement aux données vous concernant et seuls des données liées à votre profil sans qu’il soit possible de vous identifier directement ou indirectement, peuvent être utilisées pour ces annonceurs

*) les autorités administratives ou judiciaires le cas échéant dans le cadre du respect de nos obligations légales ou pour nous permettre d’assurer la défense de nos droits et intérêts.

 
        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            LIMITATION DE LA DUREE DE CONSERVATION DE VOS DONNEES
        </Typography> 

        <Typography>
          Les données collectées vous concernant seront conservées pour la durée nécessaire à l’accomplissement des finalités ci – dessus, augmentée du délai de la prescription légale. 
        </Typography>

        <Typography>
          Ainsi, à titre principal, vos données de compte (inscription) seront conservées pendant toute la durée de votre adhésion. Elles pourront ensuite être conservées et traitées pendant 5 ans suivant le dernier contact de votre part, pour nous permettre de vous adresser des sollicitations commerciales. 
        </Typography>

        <Typography>
          Les données qui vous concernent sont susceptibles d’être conservées plus longtemps au titre d’obligations légales spécifiques ou au regard des délais de prescription légale applicables. A titre d’exemple, les données peuvent être conservées pendant :
        </Typography>

        <ul>
            <Typography>
                1 - 6 ans pour les documents fiscaux ;
            </Typography>
            <Typography>
                2 - 10 ans pour les pièces comptables ;
            </Typography>                
            <Typography>
                3 - Toute la durée des contentieux et jusqu’à épuisement des voies de recours.
            </Typography>        
        </ul>

        <Typography>
          Enfin, en cas d'exercice de leurs droits par les personnes concernées, les données relatives aux pièces d'identité peuvent être conservées pendant les délais de prescription légale applicables, soit pendant une période maximale de 3 ans.
        </Typography>

        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            COMMENT VOS DONNEES SONT-ELLES SECURISEES ?
        </Typography> 

        <Typography>
          La société LA FOURCHE prend en compte, la nature des données personnelles et les risques que présentent les traitements, pour mettre en place les mesures techniques, physiques et organisationnelles appropriées pour préserver la sécurité et la confidentialité des données personnelles et empêcher qu’elles ne soient déformées, endommagées ou que des tiers non autorisés y aient accès. 
        </Typography>

        <Typography>
          La société LA FOURCHE choisit des sous-traitants ou des prestataires qui présentent des garanties en terme de qualité, de sécurité, de fiabilité et de ressources pour assurer la mise en œuvre de mesures techniques et organisationnelles y compris en matière de sécurité des traitements. Les sous-traitants et les prestataires s’engagent à respecter des niveaux de confidentialité au moins identiques à ceux de la société LA FOURCHE.
        </Typography>

        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            VOS DONNEES SONT-ELLES TRAITEES EN DEHORS DE L’UNION EUROPEENNE ?
        </Typography> 

        <Typography>
          Les différentes catégories de données collectées et traitées peuvent être transmises à des sociétés prestataires situées dans des pays hors Union Européenne tels que le Maroc, voire dans le cadre de prestations informatiques ou de l’exploitation de données en lien avec les réseaux sociaux. 
        </Typography>

        <Typography>
          Pour sécuriser les transferts hors de l’Union européenne, nos sous-traitant signent avec LA FOURCHE par exemple soit des clauses types définies par la Commission européenne afin d’encadrer les flux, soit son soumis à des règles internes contraignantes par les autorités qui contrôlent la protection des données personnelles, ou sont situés dans un pays disposant d’une législation offrant une protection adéquate.
        </Typography>

        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            Liste des prestataires et localisation:
        </Typography> 

        <ul>
            <Typography>1 - Shopify (Union Européenne et Etats-Unis)</Typography>
            <Typography>2 - Stripe (Union Européenne et Etats-Unis)</Typography>                
            <Typography>3 - Facebook (Etats-Unis)</Typography>   
            <Typography>4 - Google (Etats-Unis)</Typography>
            <Typography>5 - AWS (Union Européenne et Etats-Unis)</Typography>                
            <Typography>6 - Zendesk (Union Européenne et Etats-Unis)</Typography>                   
            <Typography>7 - ShippyPro (Union Européenne et Etats-Unis)</Typography>                           
        </ul>

        <Typography>
            Nous transmettons également certaines données à nos partenaires transporteurs (DPD, Mondial Relay, UPS, Chronopost).
        </Typography> 

        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            QUELS SONT VOS DROITS ?
        </Typography>

        <Typography>
          Conformément à la règlementation sur la protection des données à caractère personnel, vous bénéficiez d’un droit à l’information ainsi que d’un droit d’accès, de rectification, d’effacement (sauf si elles sont nécessaires à l’exécution de notre contrat, ou qu’elles nous sont nécessaires pour respecter nos obligations légales ou constater ou exercer nos droits) lié aux données qui vous concernent, ainsi que du droit de définir des directives relatives au sort de vos données après votre décès. Il est ici précisé qu’au titre du droit d’accès, LA FOURCHE pourra demander le paiement de frais raisonnables basés sur les coûts administratifs pour toute copie supplémentaire des données à celle qui vous sera communiquée. 
        </Typography>

        <Typography>
          Vous disposez également d’un droit d’obtenir la limitation d’un traitement et d’un droit à la portabilité des données que vous avez pu fournir, qui trouveront à s’appliquer dans certains cas. Par ailleurs, vous pouvez demander à exercer votre droit d’opposition pour motif pour des raisons tenant à votre situation particulière, à un traitement de données personnelles vous concernant lorsque le traitement est fondé sur l’intérêt légitime du responsable de traitement y compris le profilage. En cas d’exercice d’un tel droit d’opposition, LA FOURCHE cessera le traitement sauf lorsqu’il existe des motifs légitimes et impérieux pour le traitement qui prévalent sur les intérêts et droits et les libertés de la personne concernée ou pour la constatation, l’exercice ou la défense d’un droit en justice. Vous pouvez également vous opposer pour tout traitement lié à la prospection (y compris le profilage lié à une telle prospection), ou retirer votre consentement à tout moment, pour les cas où celui-ci vous aurait été demandé (le retrait de votre consentement sera sans incidence sur la licéité du traitement réalisé avant le retrait du consentement) 
        </Typography>

        <Typography>
          LA FOURCHE souhaite vous informer que le non renseignement ou la modification de vos données sont susceptibles d’avoir des conséquences dans le traitement de certaines demandes dans le cadre de l’exécution des services et que vos demandes au titre de l’exercice des droits sera conservées à des fins de suivi
        </Typography>

        <Typography variant='h6'sx={{marginTop: 1, marginBottom: 1}}>
            Pour exercer vos droits, il vous suffit d’écrire à La Fourche, 1 centre commercial La Tour 93120 La Courneuve :
        </Typography> 

        <Typography>
          - Par courrier électronique : contact@lafourche.fr en nous indiquant vos nom, prénom, e-mail adresse et si possible votre référence client. Conformément à la réglementation en vigueur, votre demande doit être signée et accompagnée de la photocopie d’un titre d’identité portant votre signature et préciser l’adresse à laquelle doit vous parvenir la réponse. Une réponse vous sera alors adressée dans les meilleurs délais
        </Typography>

        <Typography>
          Nous vous informons par ailleurs de l’existence de la liste d'opposition au démarchage téléphonique « Bloctel », gérée par Opposetel, sur laquelle vous pouvez vous inscrire gratuitement ici : https://conso.bloctel.fr/. 
        </Typography>

        <Typography>
          Dans l’hypothèse où nous ne parviendrions pas à répondre à vos demandes d’une manière qui vous satisfasse, vous pouvez également introduire une réclamation auprès d’une autorité de contrôle (en France la CNIL 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07. Tél : 01 53 73 22 22).
        </Typography>
    </div>
  )
}
