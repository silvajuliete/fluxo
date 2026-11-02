let nome = "";
let etapa = 0;

function enviar() {

    const input = document.getElementById("mensagem");
    const chat = document.getElementById("chat");

    const mensagem = input.value.trim();

    if(!mensagem){
        return;
    }

    chat.innerHTML += `
        <div class="user">
            ${mensagem}
        </div>
    `;

    if(etapa === 0){

        nome = mensagem;
        etapa = 1;

        chat.innerHTML += `
            <div class="bot">
                Prazer, ${nome}! 💖

                <br><br>

                Escolha uma opção:

                <br><br>

                1️⃣ Serviços e Valores

                <br>
                2️⃣ Agendar Avaliação

                <br>
                3️⃣ Dúvidas Frequentes

                <br>
                4️⃣ Falar com Atendente

                <br>
                5️⃣ Nossa Localização
            </div>
        `;
    }

    else{

        switch(mensagem){

            case "1":
                chat.innerHTML += `
                <div class="bot">
                    💆 Serviços Disponíveis

                    <br><br>

                    ✔ Limpeza de Pele - R$120

                    <br>

                    ✔ Botox - R$800

                    <br>

                    ✔ Harmonização Facial - R$1.200

                    <br>

                    ✔ Preenchimento Labial - R$900

                    <br>

                    ✔ Depilação a Laser - R$99

                    <br><br>

                    Digite outra opção para continuar.
                </div>
                `;
                break;

            case "2":
                chat.innerHTML += `
                <div class="bot">
                    📅 Agendamento

                    <br><br>

                    Horários disponíveis:

                    <br>

                    ☀️ Manhã

                    <br>

                    🌤 Tarde

                    <br>

                    🌙 Noite

                    <br><br>

                    Nossa atendente entrará em contato.
                </div>
                `;
                break;

            case "3":
                chat.innerHTML += `
                <div class="bot">
                    ❓ Dúvidas Frequentes

                    <br><br>

                    ✔ Avaliação Gratuita

                    <br>

                    ✔ Parcelamos em até 12x

                    <br>

                    ✔ Atendimento especializado

                    <br>

                    ✔ Procedimentos aprovados pela Anvisa
                </div>
                `;
                break;

            case "4":
                chat.innerHTML += `
                <div class="bot">
                    👩‍💼 Fale com nossa atendente:

                    <br><br>

                    <a target="_blank"
                    href="https://wa.me/5521999999999">
                    Abrir WhatsApp
                    </a>
                </div>
                `;
                break;

            case "5":
                chat.innerHTML += `
                <div class="bot">
                    📍 Nossa localização:

                    <br><br>

                    <a target="_blank"
                    href="https://maps.google.com">
                    Abrir Google Maps
                    </a>
                </div>
                `;
                break;

            default:
                chat.innerHTML += `
                <div class="bot">
                    Escolha uma opção entre 1 e 5.
                </div>
                `;
        }
    }

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}
