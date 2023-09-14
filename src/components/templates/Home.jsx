import React from "react";
import './Home.css'
import img from "../imgs/Healthy_habit-bro.png";
import Calc from "./Calc";

export default props =>
    <main className="" id="home">
        <section className="m-auto text-white p-4">
            <div className="container-fluid" >
                <h1 className="text-center text-dark mb-4" >Cultive uma Vida Saudável com Bons Hábitos</h1>
                <p className="lh-lg font-monospace text-dark">
                    Bem-vindo ao nosso espaço dedicado à promoção de uma vida saudável através de bons hábitos. Sabemos que a saúde é um dos pilares mais importantes para desfrutar de uma vida plena e feliz. Portanto, estamos aqui para ajudá-lo a adotar e manter práticas saudáveis que podem transformar sua vida.
                    <img src={img} className="img-fluid my-2"  alt="habitos saudaveis icone" title="Icone Bons hábitos"/>

                    <h2 className="text-center fs-5 my-3">O Poder dos Bons Hábitos</h2>

                    Hábitos saudáveis são pequenas ações repetidas regularmente, que têm um grande impacto a longo prazo. Quando você incorpora bons hábitos em sua rotina diária, está investindo no seu bem-estar físico e mental. Essas ações podem ajudar a prevenir doenças, aumentar sua energia, melhorar seu humor e aumentar sua qualidade de vida.

                    <h2 className="text-center fs-5 my-3">Dicas para Incorporar Bons Hábitos</h2>

                    1- Alimentação Balanceada: Uma dieta equilibrada rica em frutas, legumes, proteínas magras e grãos integrais é fundamental para a sua saúde. Evite alimentos processados e açúcares em excesso.
                    <br/>
                    2- Atividade Física: Mexa-se! Praticar exercícios regularmente não apenas mantém seu corpo em forma, mas também melhora seu sistema cardiovascular e libera endorfinas que reduzem o estresse.
                    <br/>
                    3- Hidratação: Beba bastante água ao longo do dia para manter seu corpo bem hidratado e funcionando corretamente.
                    <br/>
                    4- Sono de Qualidade: Garanta um sono reparador. Dormir de 7 a 9 horas por noite ajuda na recuperação física e mental.
                    <br/>
                    5- Mente Saudável: A saúde mental é igualmente importante. Pratique a meditação, o relaxamento e procure ajuda profissional quando necessário.
                    <br/>
                    6- Evite o Tabagismo e o Álcool em Excesso: Estes hábitos podem ter um impacto negativo significativo na saúde a longo prazo.
                    

                    <aside className="my-3">Lembre-se, a chave para uma vida saudável está na consistência. Pequenas mudanças positivas podem levar a grandes resultados. Comece hoje mesmo a cultivar bons hábitos e aproveite os benefícios de uma vida mais saudável e feliz.
                    </aside>

                </p>
            </div>
            <aside>
            <div className="container imc">
                <h1 className="text-center my-4 text-dark">IMC</h1>
                <p className='lh-lg font-monospace text-dark'>
                    O Índice de Massa Corporal, mais conhecido como IMC, é uma ferramenta amplamente utilizada para avaliar a condição de peso de uma pessoa com base em sua altura e peso. Ele é um indicador simples, porém útil, que auxilia profissionais de saúde e indivíduos a entenderem melhor sua composição corporal e os riscos associados ao excesso de peso ou à magreza.

                    O cálculo do IMC é bastante direto: você divide seu peso em quilogramas pela sua altura em metros elevada ao quadrado. A fórmula é a seguinte:

                    IMC = Peso (kg) / (Altura (m) * Altura (m))

                    Os resultados são então interpretados em categorias que ajudam a classificar o estado de peso da pessoa:

                    IMC abaixo de 18,5: Abaixo do peso
                    IMC entre 18,5 e 24,9: Peso saudável
                    IMC entre 25 e 29,9: Sobrepeso
                    IMC entre 30 e 34,9: Obesidade grau 1 (leve)
                    IMC entre 35 e 39,9: Obesidade grau 2 (moderada)
                    IMC acima de 40: Obesidade grau 3 (grave)
                    É importante notar que o IMC tem algumas limitações. Ele não leva em consideração a distribuição de gordura corporal, a composição muscular e outros fatores que podem afetar a saúde de uma pessoa. Portanto, embora seja uma ferramenta útil para avaliação inicial, não deve ser a única consideração na avaliação da saúde de alguém.

                    Além disso, o IMC é mais aplicável a adultos do que a crianças e adolescentes em crescimento, e sua interpretação pode variar entre diferentes grupos étnicos e populações. Portanto, é importante que a interpretação do IMC seja feita levando em consideração a orientação de um profissional de saúde.

                    Embora o IMC seja uma métrica útil para avaliar a condição de peso de uma pessoa, é essencial lembrar que a saúde é um conceito complexo que vai além do simples número do IMC. Uma dieta equilibrada, atividade física regular e uma abordagem holística para o bem-estar geral são fundamentais para uma vida saudável. Portanto, ao considerar seu IMC, é importante também considerar outros fatores de saúde e buscar orientação médica quando necessário para desenvolver um plano de saúde personalizado.
                </p>
            </div>
            <h1 className="text-center my-3 text-dark">
                Calculadora
            </h1>
                <Calc/>
            </aside>
        </section>
    </main>