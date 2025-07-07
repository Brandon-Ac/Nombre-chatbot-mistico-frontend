document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    let cardsData = {
        0: {
            title: "Recibir sin límites",
            question: "¿Qué energía, espacio, conciencia y elección puedo ser para recibir más dinero de lo que jamás imaginé, con total facilidad?",
            answer: "💬 Eres capaz de recibir más de lo que tu mente ha soñado. Solo necesitas permitirte ser la vibración del recibir sin límites. Todo ya está disponible para ti. ¡Elige abrirte hoy!"
        },
        1: {
            title: "Magnético como el café",
            question: "¿Qué tomaría para que el dinero me busque a mí como yo busco el café en las mañanas?",
            answer: "💬 Tomaría que te reconozcas como valioso, magnético y digno. El dinero ama la energía de quien se elige con gozo. Sé tú... ¡y que el dinero te encuentre irresistible!"
        },
        2: {
            title: "Sin puntos de vista",
            question: "Si no tuviera ningún punto de vista sobre el dinero, ¿cuánto podría recibir hoy?",
            answer: "💬 Recibirías infinitamente más. Los juicios cierran puertas. La neutralidad abre portales. Hoy, suelta todo punto de vista… y deja que el universo te sorprenda."
        },
        3: {
            title: "El dinero como amante",
            question: "¿Y si el dinero fuera mi amante, cómo le estaría tratando?",
            answer: "💬 ¿Lo ignoras? ¿Lo reclamas? ¿Lo criticas? Hoy, empieza a seducir al dinero con gratitud, cariño y presencia. Trátalo como a un amor valioso... ¡y querrá quedarse contigo!"
        },
        4: {
            title: "Soltar la escasez",
            question: "¿Qué está creando escasez en mi vida que podría soltar ahora mismo?",
            answer: "💬 Tus viejas creencias, tus miedos heredados, tu duda. Suéltalos ahora. No los necesitas. Elige hoy una nueva historia donde la abundancia es tu base."
        },
        5: {
            title: "¿Qué es el dinero para ti?",
            question: "¿Qué es el dinero para mí... y de quién aprendí eso?",
            answer: "💬 Haz consciente esa definición. No es tuya si no te expande. Puedes crear tu propia visión del dinero: como amigo, aliado, energía disponible. ¡Elige la que te empodere!"
        },
        6: {
            title: "Rompiendo juicios",
            question: "¿Qué juicios estoy usando para limitar el dinero que puedo elegir?",
            answer: "💬 Todo juicio es una barrera invisible. Elimina el 'mucho', el 'demasiado', el 'no merezco'. Sin juicios, el dinero fluye como el agua: natural, libre, constante."
        },
        7: {
            title: "Reconocer la riqueza",
            question: "¿Qué me impide reconocer que ya soy una energía de riqueza?",
            answer: "💬 Nada, salvo tu duda. Tú ya eres abundancia en forma humana. Recuérdalo. Reconócelo. Reclámalo hoy. La riqueza empieza cuando te sabes suficiente."
        },
        8: {
            title: "Disfrutar sin culpa",
            question: "¿Cuánto más dinero podría tener si me atreviera a disfrutar sin culpa?",
            answer: "💬 Muchísimo más. La culpa aleja, el gozo atrae. Disfrutar es tu permiso para recibir más. Hoy, atrévete a gozar... y observa cómo todo mejora."
        },
        9: {
            title: "Posibilidades infinitas",
            question: "¿Qué posibilidades infinitas con el dinero están disponibles hoy que aún no he reconocido?",
            answer: "💬 Millones. Clientes, ideas, regalos, oportunidades... Solo necesitas mirar desde la pregunta, no desde la conclusión. ¡Explora, juega, recibe!"
        },
        10: {
            title: "Suelta el control",
            question: "¿Qué debo dejar de controlar para que el dinero fluya con más gozo?",
            answer: "💬 Deja de controlar el cómo, el cuándo, el quién. El universo tiene mil caminos. Suelta el volante y permite que el dinero llegue... con gozo inesperado."
        },
        11: {
            title: "Recibir sin esfuerzo",
            question: "¿Estoy dispuesta a recibir dinero de formas inesperadas y sin esfuerzo?",
            answer: "💬 Sí. Porque el esfuerzo no es el requisito, la disposición sí. Abre tu energía a recibir desde lugares nuevos. Lo inesperado puede ser mejor que lo planeado."
        },
        12: {
            title: "Evitar la grandeza",
            question: "¿Qué estoy evitando o defendiendo que me impide ser millonaria?",
            answer: "💬 Quizá estás evitando tu grandeza o defendiendo viejas ideas de humildad. Suelta ambas. Ser millonaria no es malo, ¡es expansivo si eliges desde la conciencia!"
        },
        13: {
            title: "Tu verdad financiera",
            question: "¿Qué más es posible con el dinero que nunca nadie me enseñó?",
            answer: "💬 Todo. Crear, sanar, contribuir, jugar, expandir tu vida. Lo que no te enseñaron, lo puedes descubrir tú. ¡Explora tu propia verdad financiera!"
        },
        14: {
            title: "Dejar de rechazar",
            question: "¿Qué pasaría si dejara de rechazar ser rica?",
            answer: "💬 Pasaría que empezarías a serlo. La riqueza comienza cuando dejas de decirle “no” a tu potencial. Hoy, dile “sí” a lo que realmente mereces."
        },
        15: {
            title: "El dinero no es un problema",
            question: "¿Y si el dinero no fuera un problema… qué elegiría hoy?",
            answer: "💬 Elegirías lo que te emociona, te inspira, te expande. Sin el miedo al dinero, tu corazón hablaría más fuerte. Escúchalo... y elige desde ahí."
        },
        16: {
            title: "Herencia familiar",
            question: "¿Qué estoy copiando de mi familia sobre el dinero que ya no me sirve?",
            answer: "💬 Tal vez escasez, sacrificio, lucha. Agradéceles lo que aprendiste y déjalo ir. Tú puedes crear una nueva relación con el dinero, única y poderosa."
        },
        17: {
            title: "Facilidad, alegría y gloria",
            question: "¿Qué tomaría para que el dinero se muestre hoy con facilidad, alegría y gloria?",
            answer: "💬 Tomaría que lo invites con gozo, gratitud y confianza. El dinero responde a la ligereza. Sé la energía que lo hace querer quedarse."
        },
        18: {
            title: "Gratitud y duplicación",
            question: "¿Qué nivel de gratitud y gozo puedo ser hoy para duplicar mis ingresos?",
            answer: "💬 Gratitud es una puerta mágica. Sé agradecido por lo que tienes y por lo que viene. El gozo te conecta con la abundancia. ¡Y eso crea más!"
        },
        19: {
            title: "Sin perder mi esencia",
            question: "¿Cuánto dinero estoy dispuesto(a) a tener sin perder mi esencia?",
            answer: "💬 Tanto como elijas. No tienes que cambiar para tener dinero. Solo necesitas permitirte tenerlo. El dinero no corrompe: revela lo que ya eres."
        },
        20: {
            title: "Conciencia del dinero",
            question: "¿Qué conciencia del dinero estoy listo(a) para recibir hoy?",
            answer: "💬 La conciencia de que el dinero no es el fin… es el resultado de tu vibración. Hoy estás listo para recibir más, porque ya estás siendo más."
        },
        21: {
            title: "Clientes con gozo",
            question: "¿Qué energía puedo ser para atraer clientes que me paguen con gozo?",
            answer: "💬 Sé claridad, confianza y presencia. Los clientes que valoran tu trabajo sentirán su energía... y pagarán felices por ella."
        },
        22: {
            title: "Crea y elige",
            question: "¿Qué más puedo vender, crear o elegir que sea una contribución financiera para mí y para el mundo?",
            answer: "💬 Tu talento, tu historia, tu visión. Tú eres una fuente infinita de creación. Solo tienes que preguntarte: ¿qué sería divertido ofrecer hoy?"
        },
        23: {
            title: "Soltar la dificultad",
            question: "¿Qué estoy haciendo más difícil de lo que realmente es con el dinero?",
            answer: "💬 Todo lo que estás forzando o controlando. El dinero no necesita esfuerzo, necesita alineación. Relájate... y deja que fluya."
        },
        24: {
            title: "Tu magia crea dinero",
            question: "¿Qué parte de mi magia estoy ignorando que crearía más dinero de inmediato?",
            answer: "💬 Tu intuición, tu gozo, tu creatividad. Eso que haces sin pensar, con amor, es tu llave. Úsala. ¡Tu magia crea dinero cuando la honras!"
        },
        25: {
            title: "Imán para el dinero",
            question: "¿Qué me impide ser el imán que realmente soy para el dinero?",
            answer: "💬 Nada más que tus creencias. Eres un imán poderoso. Suelta la duda y reconoce tu poder de atraer exactamente lo que elijas."
        },
        26: {
            title: "Elegir sin justificar",
            question: "¿Qué tomaría para elegir más dinero sin tener que justificarlo?",
            answer: "💬 Tomaría que reconozcas que no necesitas permiso. Querer más ya es razón suficiente. El dinero llega más fácil cuando lo eliges sin culpa."
        },
        27: {
            title: "Ligereza financiera",
            question: "¿Y si el dinero no fuera serio ni pesado, cómo sería?",
            answer: "💬 Sería divertido, juguetón, libre. El dinero ama el gozo. Hoy, ríe más, juega más... y observa cómo el dinero se vuelve ligero también."
        },
        28: {
            title: "Riqueza energética",
            question: "¿Qué riqueza energética está disponible para mí ahora mismo?",
            answer: "💬 Toda. El universo está listo para contribuirte. Solo necesitas sintonizarte con esa energía. Respira... y recíbela."
        },
        29: {
            title: "Crea dinero eternamente",
            question: "¿Qué puedo ser o hacer hoy que cree más dinero ahora y para toda la eternidad?",
            answer: "💬 Puedes ser tú mismo, sin filtros, sin miedos, con total presencia. Puedes hacer lo que amas. Desde ahí, el dinero llega como consecuencia natural."
        }
    };

  const card = document.getElementById('card');
  const cardTitle = document.getElementById('cardTitle');
  const cardQuestion = document.getElementById('cardQuestion');
  const cardAnswer = document.getElementById('cardAnswer');
  const cardInfo = document.getElementById('cardInfo');
  const dailyCardBtn = document.getElementById('dailyCardBtn');
  const randomCardBtn = document.getElementById('randomCardBtn');
  const selectCardBtn = document.getElementById('selectCardBtn');
  const cardGallery = document.getElementById('cardGallery');
  const mainCardDisplay = document.getElementById('mainCardDisplay');

  setupEventListeners();

  function setupEventListeners() {
    card.addEventListener('click', function () {
      card.classList.toggle('flipped');
    });

    dailyCardBtn.addEventListener('click', () => {
      getDailyCard();
      showMainCardSection(
        'Esta es tu carta del día: ' +
          new Date().toLocaleDateString('es-ES', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
          })
      );
    });

    randomCardBtn.addEventListener('click', () => {
      getRandomCard();
      showMainCardSection('¡Una carta aleatoria ha sido seleccionada para ti!');
    });

    selectCardBtn.addEventListener('click', () => {
      showCardGallery();
      mainCardDisplay.classList.add('hidden');
      cardInfo.classList.add('hidden');
    });

    const enterBtn = document.getElementById('enterBtn');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const cardsSection = document.getElementById('cardsSection');

    const entranceSound = new Audio('./assets/sounds/entrada.m4a');
    entranceSound.volume = 0.6;

    enterBtn.addEventListener('click', () => {
      entranceSound.play();
      welcomeScreen.classList.add('fade-out');
      setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        cardsSection.scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    });
  }

  function getDailyCard() {
    const now = new Date();
    const day = now.getDay();
    const month = now.getMonth();
    const cardIndex = (day + month) % Object.keys(cardsData).length;
    showSelectedCard(cardIndex);
  }

  function getRandomCard() {
    const cardCount = Object.keys(cardsData).length;
    const randomIndex = Math.floor(Math.random() * cardCount);
    showSelectedCard(randomIndex);
  }

  function showCardGallery() {
    cardGallery.innerHTML = '';
    cardGallery.classList.remove('hidden');

    for (const [id, cardData] of Object.entries(cardsData)) {
      const cardDiv = document.createElement('div');
      cardDiv.className =
        'cursor-pointer rounded-xl p-6 bg-gradient-to-br from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 shadow-2xl text-center text-white flex flex-col items-center justify-center transition-transform transform hover:scale-105 animate-fade-in-scale';

      const cardTitle = document.createElement('h3');
      cardTitle.className = 'text-lg font-bold mb-2';
      cardTitle.textContent = cardData.title;

      const cardPreview = document.createElement('div');
      cardPreview.className =
        'w-20 h-28 bg-purple-900 rounded-lg mb-4 flex items-center justify-center text-xs text-purple-300';
      cardPreview.textContent = 'Carta';

      cardDiv.appendChild(cardPreview);
      cardDiv.appendChild(cardTitle);

      cardDiv.addEventListener('click', () => {
        showSelectedCard(id);
        showMainCardSection('Has seleccionado esta carta desde la galería.');
      });

      cardGallery.appendChild(cardDiv);
    }
  }

  function showSelectedCard(cardId) {
    const cardData = cardsData[cardId];
    if (!cardData) return;

    cardTitle.textContent = cardData.title;
    cardQuestion.textContent = cardData.question;
    cardAnswer.textContent = cardData.answer;

    card.classList.remove('flipped');

    card.classList.remove('animate-fade-in-scale');
    card.classList.add('opacity-0');

    void card.offsetWidth;

    card.classList.add('animate-fade-in-scale');
    card.classList.remove('opacity-0');
  }

  function showMainCardSection(infoText) {
    cardGallery.classList.add('hidden');
    mainCardDisplay.classList.remove('hidden');
    cardInfo.textContent = infoText;
    cardInfo.classList.remove('hidden');
  }
});

const chatbotButton = document.getElementById('chatbotButton');
const chatbotSection = document.getElementById('chatbotSection');
const backToMain = document.getElementById('backToMain');
const cardsSection = document.getElementById('cardsSection');

chatbotButton.addEventListener('click', () => {
    cardsSection.classList.add('hidden');
    chatbotSection.classList.remove('hidden');
    window.scrollTo(0, 0);
});

backToMain.addEventListener('click', () => {
    chatbotSection.classList.add('hidden');
    cardsSection.classList.remove('hidden');
});
