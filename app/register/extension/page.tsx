import React from "react";
import Link from "next/link";
import { Download, Wand2, Sparkles, Bot } from "lucide-react";
import { SparklesCore } from "@/components/SparklesCore";

export default function Extension() {
  const features = [
    "Automatize tarefas com comandos.",
    "Deixe a IA navegar e executar ações por você",
    "Economize horas de trabalho manual na web",
  ];

  return (
    <div className="min-h-screen relative  text-white">
      <div className="fixed inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#3538CD"
        />
      </div>
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center space-y-6">
          <h1 className="max-sm:text-4xl text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
            Bem-vindo ao Futuro!
          </h1>

          <p className="max-sm:text-lg text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Prepare-se para liberar o poder da automação. Deixe a <span className="font-bold" >Number One (NB1) </span> transformar sua navegação!
          </p>

          <div className="bg-blue-900/30 p-6 pt-2 rounded-xl backdrop-blur-sm mb-8">
            <p className="mb-2 font-bold text-lg">
              Aprenda a instalar a sua extensão:
            </p>

            <div className="rounded-lg overflow-hidden max-h-96 shadow-2xl">
              {/* <iframe
                src="https://drive.google.com/file/d/16nYIKUpLanS6ezERnsnT5asS3uLiPDBd/preview"
                width="100%"
                height="100%"
                allow="autoplay"
                allowFullScreen
                allowTransparency
                className="border-none"
              /> */}
              <video
                // src="/tuto.mp4"
                className="w-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/tuto.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm"
              >
                {index === 0 ? (
                  <Wand2 className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                ) : index === 1 ? (
                  <Bot className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                ) : (
                  <Sparkles className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                )}
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <Link
              href="https://storage.googleapis.com/base785259875/nb1.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              <Download className="w-6 h-6 max-sm:hidden" />
              <span className="text-xl max-sm:text-lg">Baixar Extensão NB1</span>
            </Link>

            <p className="text-blue-300 text-sm">
              Compatível com os principais navegadores
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
