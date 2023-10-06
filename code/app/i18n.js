import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import ptBR from '../public/locales/ptBR';
// import ptBR from '../public/locales/ptBR'

const ptBR = {
  "Hello,": "Olá,",
  "Thank you for visiting my portfolio website. I am passionate about design and coding, and I'm excited to showcase my work and skills to you.":"Obrigado por visitar o meu site de portfólio. Sou apaixonado por design e programação, e estou empolgado em apresentar meu trabalho e habilidades a você.",
  "I am a versatile professional with a strong background in both design and programming. My journey began with a love for creating visually appealing designs, and over the years, I've honed my coding skills to bring those designs to life. My mission is to create meaningful and innovative digital experiences that leave a lasting impression.":"Sou um profissional versátil com sólida formação em design e programação. Minha jornada começou com um amor por criar designs visualmente atraentes, e ao longo dos anos, aprimorei minhas habilidades de programação para dar vida a esses designs. Minha missão é criar experiências digitais significativas e inovadoras que deixem uma impressão duradoura.",
  "I have a solid background in Advertising and Marketing, which provides me with a unique perspective when it comes to creating engaging and effective digital experiences.": "Além da minha paixão por design e programação, tenho uma formação sólida em Publicidade e Propaganda, o que me proporciona uma visão única quando se trata de criar experiências digitais envolventes e eficazes.",
  "My skill set includes expertise in various areas, such as:": "O meu conjunto de habilidades inclui especialização em diversas áreas, tais como:",
  "Development": "Desenvolvimento",
  "Design & Prototype:": "Design & Prototipagem:",
  "I am committed to delivering innovative and functional solutions that meet my clients needs and provide memorable experiences for users. If you are looking for a versatile and passionate professional, I am available to collaborate on challenging and inspiring projects. Let's create something amazing together!": "Estou comprometido em fornecer soluções inovadoras e funcionais que atendam às necessidades dos meus clientes e proporcionem experiências memoráveis para os usuários. Se você procura um profissional versátil e apaixonado, estou disponível para colaborar em projetos desafiadores e inspiradores. Vamos criar algo incrível juntos!",
  "Back": "Voltar",
  "Social Media and Design - Campinas Power Challenge": "Redes Sociais e Design - Campinas Power Challenge",
  "<h2>Description:</h2><p>In the thrilling world of CrossFit, effective communication is as crucial as strength and endurance. In this design project, I fully immersed myself in the challenge of portraying the intensity, passion, and energy of a CrossFit sporting event, transforming them into images that stand out and engage the audience. The event took place in December 2016 in Campinas, SP.</p><h2>Objectives:</h2><p>• Create a cohesive and exciting visual identity for the CrossFit sporting event.</p><p>• Develop compelling designs that convey the strength, determination, and competitive spirit of the athletes.</p><p>• Utilize colors, typography, and graphic elements that capture the essence of CrossFit.</p><p>• Enhance the online presence of the event, increasing viewer engagement and participation.</p>": "<h2>Descrição:</h2><p>No emocionante mundo do CrossFit, a comunicação eficaz é tão crucial quanto a força e a resistência. Neste projeto de design, mergulhei de cabeça no desafio de representar a intensidade, a paixão e a energia de um evento esportivo de CrossFit, transformando-as em imagens que se destacam e envolvem a audiência. O evento ocorreu am dezembro de 2016 em Campinas / SP.</p><h2>Objetivos:</h2><p>• Criar uma identidade visual coesa e emocionante para o evento esportivo de CrossFit.</p><p>• Desenvolver designs atraentes que transmitam a força, a determinação e o espírito competitivo dos atletas.</p><p>• Utilizar cores, tipografia e elementos gráficos que capturem a essência do CrossFit.</p><p>• Reforçar a presença online do evento, aumentando o engajamento e a participação dos espectadores.</p>",
  "Contact me!": "Entre em contato comigo!"
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({

    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    resources: {
      ptBR: {
        translation: {
          ...ptBR
        }
      }
    },
  });

export default i18n;