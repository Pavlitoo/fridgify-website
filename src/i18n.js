import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uk: {
    translation: {
      nav: { home: "Головна", how: "Як це працює", privacy: "Конфіденційність", download: "Завантажити" },
      hero: { badge: "Новий рівень кулінарії", title1: "Готуй смачно з того,", title2: "що є в холодильнику", desc: "Fridgify — твій персональний ШІ-кухар. Забудь про питання «Що сьогодні приготувати?» і збережи свої продукти від псування.", btnMain: "Завантажити безкоштовно", btnHow: "Як це працює" },
      scan: { badge: "Новинка", title: "ШІ-сканер продуктів", desc: "Просто зробіть фото вмісту вашого холодильника. Наш штучний інтелект миттєво розпізнає продукти, їхню приблизну вагу та автоматично оновить ваш список.", feat1: "Миттєве розпізнавання", feat2: "Автозаповнення списку", feat3: "Точність до 95%" },
      how: { title: "Як це працює?", sub: "Три прості кроки до ідеальної вечері", s1Title: "1. Скануй або пиши", s1Desc: "Сфотографуй холодильник або впиши інгредієнти вручну.", s2Title: "2. ШІ генерує", s2Desc: "Наш розумний алгоритм підбере ідеальний рецепт.", s3Title: "3. Насолоджуйся", s3Desc: "Смакуй неймовірну страву!" },
      cta: { title: "Час готувати розумно!", sub: "Приєднуйся до тисяч кухарів. Завантажуй Fridgify зараз.", btn: "Доступно в Google Play" },
      footer: { rights: "Всі права захищені.", motto: "Готуй розумно, живи смачно." },
      privacy: { 
        title: "Політика конфіденційності", 
        update: "Останнє оновлення: 20 березня 2026 року",
        intro: "Розробник створив додаток Fridgify як безкоштовний додаток. Ця сторінка використовується для інформування відвідувачів щодо нашої політики збору та використання особистої інформації.",
        t1: "1. Збір та використання інформації",
        p1: "Для покращення вашого досвіду ми збираємо дані авторизації (Email) та дані про інгредієнти, які ви вводите для генерації рецептів.",
        t2: "2. Обробка фотографій та ШІ",
        p2: "Коли ви використовуєте функцію 'Сканування холодильника', фотографії передаються на захищені сервери Google Gemini для розпізнавання. Ми не зберігаємо ваші фото після завершення аналізу.",
        t3: "3. Сторонні сервіси",
        p3: "Ми використовуємо перевірених партнерів для стабільної роботи:",
        t4: "4. Безпека",
        p4: "Ми використовуємо сучасне шифрування для захисту ваших даних. Проте пам'ятайте, що жоден метод передачі через Інтернет не є на 100% безпечним.",
        contactTitle: "Зв'яжіться з нами", 
        contactDesc: "Якщо у вас є запитання, пишіть нам на:"
      }
    }
  },
  en: {
    translation: {
      nav: { home: "Home", how: "How it works", privacy: "Privacy", download: "Download" },
      hero: { badge: "Next level cooking", title1: "Cook delicious meals with", title2: "what's in your fridge", desc: "Fridgify is your personal AI sous-chef. Stop wondering «What's for dinner?» and save your food from going bad.", btnMain: "Download for free", btnHow: "How it works" },
      scan: { badge: "New Feature", title: "AI Product Scanner", desc: "Just snap a photo of your fridge. Our AI recognizes products and quantities, automatically updating your digital list.", feat1: "Instant Recognition", feat2: "Auto-list Update", feat3: "95% Accuracy" },
      how: { title: "How it works?", sub: "Three simple steps to perfect dinner", s1Title: "1. Scan or Type", s1Desc: "Snap a photo of your fridge or enter ingredients manually.", s2Title: "2. AI Generates", s2Desc: "Our smart algorithm finds the perfect recipe from your ingredients.", s3Title: "3. Enjoy", s3Desc: "Cook following detailed instructions and enjoy your meal!" },
      cta: { title: "Time to cook smart!", sub: "Join the community. Download Fridgify now.", btn: "Get it on Google Play" },
      privacy: { 
        title: "Privacy Policy", 
        update: "Last updated: March 20, 2026",
        intro: "The developer built the Fridgify app as a free app. This page is used to inform visitors regarding our policies with the collection and use of Personal Information.",
        t1: "1. Data Collection and Use",
        p1: "To improve your experience, we collect authorization data (Email) and information about ingredients you enter for AI recipe generation.",
        t2: "2. Image Processing and AI",
        p2: "When you use the 'Scan Fridge' feature, photos are sent to secure Google Gemini servers for recognition. We do not store your photos.",
        t3: "3. Third-Party Services",
        p3: "We use trusted partners for stable application performance:",
        t4: "4. Security",
        p4: "We use modern encryption to protect your data. However, remember that no method of transmission over the Internet is 100% secure.",
        contactTitle: "Contact Us", 
        contactDesc: "If you have questions, email us at:"
      }
    }
  },
  de: {
    translation: {
      nav: { home: "Startseite", how: "Wie es funktioniert", privacy: "Datenschutz", download: "Herunterladen" },
      hero: { badge: "Kochen auf neuem Niveau", title1: "Koche lecker mit dem,", title2: "was im Kühlschrank ist", desc: "Fridgify ist dein persönlicher KI-Sous-Chef. Rette deine Lebensmittel vor dem Verderben.", btnMain: "Kostenlos herunterladen", btnHow: "Wie es funktioniert" },
      scan: { badge: "Neu", title: "KI-Produkt-Scanner", desc: "Machen Sie einfach ein Foto von Ihrem Kühlschrank. Unsere KI erkennt Produkte sofort.", feat1: "Sofortige Erkennung", feat2: "Auto-Liste", feat3: "95% Genauigkeit" },
      how: { title: "Wie funktioniert es?", sub: "Drei einfache Schritte", s1Title: "1. Scannen oder Tippen", s1Desc: "Foto machen oder Zutaten manuell eingeben.", s2Title: "2. KI generiert", s2Desc: "Algorithmus findet das perfekte Rezept.", s3Title: "3. Genießen", s3Desc: "Kochen und genießen!" },
      cta: { title: "Zeit, smart zu kochen!", sub: "Laden Sie Fridgify jetzt herunter.", btn: "Bei Google Play erhältlich" },
      privacy: { 
        title: "Datenschutzrichtlinie", update: "Zuletzt aktualisiert: 20. März 2026",
        intro: "Der Entwickler hat die Fridgify-App als kostenlose App erstellt. Diese Seite dient zur Information über unsere Datenschutzrichtlinien.",
        t1: "1. Datenerfassung", p1: "Wir erfassen E-Mails zur Synchronisation und Zutaten für die KI-Rezepte.",
        t2: "2. Bildverarbeitung & KI", p2: "Fotos werden zur Analyse an Google Gemini gesendet. Wir speichern Ihre Fotos nicht.",
        t3: "3. Drittanbieter", p3: "Wir nutzen Google Play Services, Firebase und Gemini AI.",
        t4: "4. Sicherheit", p4: "Wir nutzen Verschlüsselung, aber keine Internetübertragung ist 100% sicher.",
        contactTitle: "Kontakt", contactDesc: "Fragen? Schreiben Sie uns:"
      }
    }
  },
  fr: {
    translation: {
      nav: { home: "Accueil", how: "Comment ça marche", privacy: "Confidentialité", download: "Télécharger" },
      hero: { badge: "Cuisine nouvelle génération", title1: "Cuisinez avec", title2: "votre frigo", desc: "Fridgify est votre sous-chef IA. Évitez le gaspillage alimentaire.", btnMain: "Télécharger gratuitement", btnHow: "Comment ça marche" },
      scan: { badge: "Nouveau", title: "Scanner de produits IA", desc: "Prenez simplement une photo de votre frigo. Notre IA reconnaît les produits.", feat1: "Reconnaissance instantanée", feat2: "Mise à jour auto", feat3: "Précision 95%" },
      how: { title: "Comment ça marche?", sub: "Trois étapes simples", s1Title: "1. Scanner ou Taper", s1Desc: "Prenez une photo ou entrez les ingrédients.", s2Title: "2. L'IA génère", s2Desc: "L'algorithme trouve la recette parfaite.", s3Title: "3. Dégustez", s3Desc: "Savourez votre repas!" },
      cta: { title: "Cuisinez intelligemment!", sub: "Téléchargez Fridgify maintenant.", btn: "Disponible sur Google Play" },
      privacy: { 
        title: "Confidentialité", update: "Mis à jour: 20 Mars 2026",
        intro: "Le développeur a créé l'application Fridgify en tant qu'application gratuite. Cette page informe sur nos politiques de confidentialité.",
        t1: "1. Collecte de données", p1: "Nous collectons l'e-mail et les ingrédients pour générer des recettes.",
        t2: "2. Traitement d'image & IA", p2: "Les photos sont envoyées à Google Gemini pour analyse. Nous ne stockons pas vos photos.",
        t3: "3. Services tiers", p3: "Nous utilisons Google Play, Firebase et Gemini AI.",
        t4: "4. Sicherheit", p4: "Nous utilisons le cryptage, mais aucune méthode n'est sûre à 100%.",
        contactTitle: "Contact", contactDesc: "Des questions? Écrivez-nous:"
      }
    }
  },
  es: {
    translation: {
      nav: { home: "Inicio", how: "Cómo funciona", privacy: "Privacidad", download: "Descargar" },
      hero: { badge: "Cocina de otro nivel", title1: "Cocina delicioso con", title2: "lo que tienes", desc: "Fridgify es tu sous-chef de IA. Evita desperdiciar comida.", btnMain: "Descargar gratis", btnHow: "Cómo funciona" },
      scan: { badge: "Nuevo", title: "Escáner de productos IA", desc: "Toma una foto de tu nevera. Nuestra IA reconoce los productos.", feat1: "Reconocimiento rápido", feat2: "Lista automática", feat3: "95% de precisión" },
      how: { title: "¿Cómo funciona?", sub: "Tres sencillos pasos", s1Title: "1. Escanear o Escribir", s1Desc: "Toma una foto o escribe los ingredientes.", s2Title: "2. IA genera", s2Desc: "Encuentra la receta perfecta.", s3Title: "3. Disfruta", s3Desc: "¡Buen provecho!" },
      cta: { title: "¡Hora de cocinar!", sub: "Descarga Fridgify ahora.", btn: "Disponible en Google Play" },
      privacy: { 
        title: "Privacidad", update: "Actualizado: 20 de Marzo 2026",
        intro: "El développeur creó Fridgify como una aplicación gratuita. Esta página informa sobre nuestras políticas de datos.",
        t1: "1. Recopilación de datos", p1: "Recopilamos correos electrónicos e ingredientes para generar recetas.",
        t2: "2. Procesamiento de imágenes", p2: "Las fotos se envían a Google Gemini para su análisis. No guardamos sus fotos.",
        t3: "3. Servicios de terceros", p3: "Usamos Google Play, Firebase y Gemini AI.",
        t4: "4. Seguridad", p4: "Usamos cifrado, pero ningún método en Internet es 100% seguro.",
        contactTitle: "Contacto", contactDesc: "¿Preguntas? Escríbenos:"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uk",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;