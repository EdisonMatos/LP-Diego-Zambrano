import React from "react";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagesGallery3Slides(props) {
  const isMobileView = window.innerWidth <= 640;

  const {
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    slide12,
    slide13,
    slide14,
    slide15,
    slide16,
    slide17,
  } = props;

  ImagesGallery3Slides.propTypes = {
    slide1: PropTypes.any,
    slide2: PropTypes.any,
    slide3: PropTypes.any,
    slide4: PropTypes.any,
    slide5: PropTypes.any,
    slide6: PropTypes.any,
    slide7: PropTypes.any,
    slide8: PropTypes.any,
    slide9: PropTypes.any,
    slide10: PropTypes.any,
    slide11: PropTypes.any,
    slide12: PropTypes.any,
    slide13: PropTypes.any,
    slide14: PropTypes.any,
    slide15: PropTypes.any,
    slide16: PropTypes.any,
    slide17: PropTypes.any,
  };

  const images = [
    {
      original: slide1,
      thumbnail: slide1,
      originalAlt: "Imagem sobre Mapeamento Logístico de Serviços",
      thumbnailAlt: "Imagem sobre Mapeamento Logístico de Serviços",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide2,
      thumbnail: slide2,
      originalAlt: "Imagem sobre Gestão de Sistemas de Vendas",
      thumbnailAlt: "Imagem sobre Gestão de Sistemas de Vendas",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide3,
      thumbnail: slide3,
      originalAlt: "Imagem sobre Ativação e Integração de CRM",
      thumbnailAlt: "Imagem sobre Ativação e Integração de CRM",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide4,
      thumbnail: slide4,
      originalAlt: "Imagem sobre Feed de dados do sistema",
      thumbnailAlt: "Imagem sobre Feed de dados do sistema",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide5,
      thumbnail: slide5,
      originalAlt: "Imagem sobre Criação de oportunidades automáticas",
      thumbnailAlt: "Imagem sobre Criação de oportunidades automáticas",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide6,
      thumbnail: slide6,
      originalAlt: "Imagem sobre Rastreamento de leads pelo funil de vendas",
      thumbnailAlt: "Imagem sobre Rastreamento de leads pelo funil de vendas",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide7,
      thumbnail: slide7,
      originalAlt:
        "Imagem sobre Funil de organização baseado na logística de serviços",
      thumbnailAlt:
        "Imagem sobre Funil de organização baseado na logística de serviços",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide8,
      thumbnail: slide8,
      originalAlt: "Imagem sobre Criação de tarefas e agendamento do sistema",
      thumbnailAlt: "Imagem sobre  Criação de tarefas e agendamento do sistema",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide9,
      thumbnail: slide9,
      originalAlt:
        "Imagem sobre Centralizando as informações do plano contratado",
      thumbnailAlt:
        "Imagem sobre Centralizando as informações do plano contratado",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide10,
      thumbnail: slide10,
      originalAlt: "Imagem sobre Análise de custo por plataforma",
      thumbnailAlt: "Imagem sobre Análise de custo por plataforma",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide11,
      thumbnail: slide11,
      originalAlt:
        "Imagem sobre Monitoramento e ajuste de plataformas do Google",
      thumbnailAlt:
        "Imagem sobre Monitoramento e ajuste de plataformas do Google",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide12,
      thumbnail: slide12,
      originalAlt:
        "Imagem sobre Verificação e análise de dados do pacote do Meta",
      thumbnailAlt:
        "Imagem sobre Verificação e análise de dados do pacote do Meta",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide13,
      thumbnail: slide13,
      originalAlt:
        "Imagem sobre Relatórios gerenciais para avaliação da plataforma",
      thumbnailAlt:
        "Imagem sobre Relatórios gerenciais para avaliação da plataforma",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide14,
      thumbnail: slide14,
      originalAlt: "Imagem sobre Definição de padrões de serviço online",
      thumbnailAlt: "Imagem sobre Definição de padrões de serviço online",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide15,
      thumbnail: slide15,
      originalAlt:
        "Imagem sobre Assessoria Jurídica diária para Questões Contratuais e de Consumo",
      thumbnailAlt:
        "Imagem sobre Assessoria Jurídica diária para Questões Contratuais e de Consumo",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide16,
      thumbnail: slide16,
      originalAlt: "Imagem sobre Conclusão",
      thumbnailAlt: "Imagem sobre Conclusão",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide17,
      thumbnail: slide17,
      originalAlt: "Imagem sobre print",
      thumbnailAlt: "Imagem sobre print",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
  ];

  return (
    <div className="w-full">
      <ImageGallery
        items={images}
        showBullets={false}
        autoPlay={false}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showThumbnails={false}
        showNav={true}
        showPlayButton={true}
      />
    </div>
  );
}
