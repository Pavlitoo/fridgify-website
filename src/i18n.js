import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uk: {
    translation: {
      nav: { home: "Головна", how: "Як це працює", privacy: "Політика конфіденційності", download: "Завантажити" },
      hero: { badge: "Новий рівень кулінарії", title1: "Готуй смачно з того,", title2: "що є в холодильнику", desc: "Fridgify — твій персональний ШІ-кухар. Забудь про питання «Що сьогодні приготувати?» і збережи свої продукти від псування.", btnMain: "Завантажити безкоштовно", btnHow: "Як це працює" },
      how: { title: "Як це працює?", sub: "Три прості кроки до ідеальної вечері", s1Title: "1. Додай продукти", s1Desc: "Просто впиши інгредієнти, які зараз лежать у тебе в холодильнику.", s2Title: "2. ШІ генерує", s2Desc: "Наш розумний алгоритм підбере ідеальний рецепт саме з цих продуктів.", s3Title: "3. Насолоджуйся", s3Desc: "Готуй за детальною інструкцією та смакуй неймовірну страву!" },
      feat: { f1Title: "Розумні рецепти", f1Desc: "Більше ніяких довгих пошуків. ШІ видає ідеальний результат за лічені секунди.", f2Title: "Контроль свіжості", f2Desc: "Отримуй пуш-сповіщення, коли термін придатності продуктів добігає кінця.", f3Title: "Будь-яка дієта", f3Desc: "Веганська, безглютенова чи спортивна? Налаштуй профіль під себе." },
      cta: { title: "Час готувати розумно!", sub: "Приєднуйся до спільноти розумних кухарів. Завантажуй Fridgify зараз і отримай свого особистого су-шефа у кишені.", btn: "Доступно в Google Play" },
      footer: { rights: "Всі права захищені.", motto: "Готуй розумно, живи смачно." },
      privacy: { 
        title: "Політика конфіденційності", 
        update: "Останнє оновлення: 20 лютого 2026 року",
        intro: "Розробник (\"ми\", \"нас\", \"наш\") створив додаток Fridgify як безкоштовний додаток (з підтримкою реклами). ЦЯ ПОСЛУГА надається нами безкоштовно та призначена для використання як є. Ця сторінка використовується для інформування відвідувачів щодо нашої політики збору, використання та розкриття Особистої інформації.",
        t1: "1. Збір та використання інформації",
        p1: "Для кращого досвіду під час використання нашого Сервісу ми можемо вимагати від вас надати нам певну особисту інформацію, включаючи, але не обмежуючись:",
        l1_1: "Дані авторизації:", l1_1d: "Ваша електронна адреса (якщо ви створюєте обліковий запис).",
        l1_2: "Дозволи пристрою:", l1_2d: "Камера та пам'ять (для додавання фотографій продуктів), мікрофон (для голосового введення), сповіщення (для нагадувань про терміни придатності).",
        l1_3: "Дані про використання:", l1_3d: "Інформація про те, які інгредієнти ви вводите для генерації рецептів за допомогою Штучного Інтелекту.",
        t2: "2. Сторонні постачальники послуг",
        p2: "Додаток використовує сторонні сервіси, які можуть збирати інформацію, що використовується для вашої ідентифікації. Посилання на політику конфіденційності сторонніх постачальників послуг, які використовує додаток:",
        t3: "3. Журнал даних (Log Data)",
        p3: "Ми хочемо повідомити вам, що щоразу, коли ви використовуєте наш Сервіс, у випадку помилки в додатку ми збираємо дані та інформацію (через сторонні продукти) на вашому телефоні під назвою Log Data. Цей журнал даних може містити таку інформацію, як IP-адреса вашого пристрою, назва пристрою, версія операційної системи, конфігурація додатка, час і дата використання Сервісу та інша статистика.",
        t4: "4. Безпека",
        p4: "Ми цінуємо вашу довіру в наданні нам вашої Особистої інформації, тому ми прагнемо використовувати комерційно прийнятні засоби її захисту. Але пам’ятайте, що жоден метод передачі через Інтернет або метод електронного зберігання не є 100% безпечним і надійним, і ми не можемо гарантувати його абсолютну безпеку.",
        t5: "5. Конфіденційність дітей",
        p5: "Ці Послуги не стосуються нікого віком до 13 років. Ми свідомо не збираємо особисту інформацію від дітей віком до 13 років. Якщо ми виявимо, що дитина віком до 13 років надала нам особисту інформацію, ми негайно видалимо її з наших серверів.",
        t6: "6. Зміни до цієї Політики",
        p6: "Ми можемо час від часу оновлювати нашу Політику конфіденційності. Таким чином, вам радимо періодично переглядати цю сторінку на наявність будь-яких змін. Ми повідомимо вас про будь-які зміни, опублікувавши нову Політику конфіденційності на цій сторінці.",
        contactTitle: "Зв'яжіться з нами",
        contactDesc: "Якщо у вас є будь-які запитання або пропозиції щодо нашої Політики конфіденційності, не соромтеся звертатися до нас за електронною адресою:"
      }
    }
  },
  en: {
    translation: {
      nav: { home: "Home", how: "How it works", privacy: "Privacy Policy", download: "Download" },
      hero: { badge: "Next level cooking", title1: "Cook delicious meals with", title2: "what's in your fridge", desc: "Fridgify is your personal AI sous-chef. Stop wondering «What's for dinner?» and save your food from going bad.", btnMain: "Download for free", btnHow: "How it works" },
      how: { title: "How it works?", sub: "Three simple steps to perfect dinner", s1Title: "1. Add ingredients", s1Desc: "Just type in the items you currently have in your fridge.", s2Title: "2. AI Generates", s2Desc: "Our smart algorithm finds the perfect recipe from your ingredients.", s3Title: "3. Enjoy", s3Desc: "Cook following detailed instructions and enjoy your meal!" },
      feat: { f1Title: "Smart Recipes", f1Desc: "No more endless searching. AI gives the perfect result in seconds.", f2Title: "Freshness Control", f2Desc: "Get push notifications when your food is about to expire.", f3Title: "Any Diet", f3Desc: "Vegan, gluten-free, or athletic? Customize your profile." },
      cta: { title: "Time to cook smart!", sub: "Join the community of smart cooks. Download Fridgify now and get a personal sous-chef in your pocket.", btn: "Get it on Google Play" },
      footer: { rights: "All rights reserved.", motto: "Cook smart, live delicious." },
      privacy: { 
        title: "Privacy Policy", 
        update: "Last updated: February 20, 2026",
        intro: "The developer (\"we\", \"us\", \"our\") built the Fridgify app as a Free app (ad-supported). This SERVICE is provided by us at no cost and is intended for use as is. This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information.",
        t1: "1. Information Collection and Use",
        p1: "For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to:",
        l1_1: "Authorization data:", l1_1d: "Your email address (if you create an account).",
        l1_2: "Device permissions:", l1_2d: "Camera and storage (for adding food photos), microphone (for voice input), notifications (for expiration reminders).",
        l1_3: "Usage data:", l1_3d: "Information about what ingredients you enter to generate recipes using Artificial Intelligence.",
        t2: "2. Third-Party Service Providers",
        p2: "The app does use third-party services that may collect information used to identify you. Links to the privacy policy of third-party service providers used by the app:",
        t3: "3. Log Data",
        p3: "We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device IP address, device name, operating system version, the configuration of the app, the time and date of your use of the Service, and other statistics.",
        t4: "4. Security",
        p4: "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.",
        t5: "5. Children's Privacy",
        p5: "These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.",
        t6: "6. Changes to This Privacy Policy",
        p6: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.",
        contactTitle: "Contact Us",
        contactDesc: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:"
      }
    }
  },
  de: {
    translation: {
      nav: { home: "Startseite", how: "Wie es funktioniert", privacy: "Datenschutzrichtlinie", download: "Herunterladen" },
      hero: { badge: "Kochen auf neuem Niveau", title1: "Koche lecker mit dem,", title2: "was im Kühlschrank ist", desc: "Fridgify ist dein persönlicher KI-Sous-Chef. Vergiss die Frage «Was essen wir heute?» und rette deine Lebensmittel vor dem Verderben.", btnMain: "Kostenlos herunterladen", btnHow: "Wie es funktioniert" },
      how: { title: "Wie es funktioniert?", sub: "Drei einfache Schritte zum perfekten Abendessen", s1Title: "1. Zutaten hinzufügen", s1Desc: "Gib einfach ein, was du gerade im Kühlschrank hast.", s2Title: "2. KI generiert", s2Desc: "Unser smarter Algorithmus findet das perfekte Rezept für dich.", s3Title: "3. Genießen", s3Desc: "Koche nach genauer Anleitung und genieße dein Essen!" },
      feat: { f1Title: "Smarte Rezepte", f1Desc: "Kein langes Suchen mehr. Die KI liefert sofort perfekte Ergebnisse.", f2Title: "Frische-Kontrolle", f2Desc: "Erhalte Benachrichtigungen, bevor Lebensmittel ablaufen.", f3Title: "Jede Diät", f3Desc: "Vegan, glutenfrei oder sportlich? Passe dein Profil an." },
      cta: { title: "Zeit, smart zu kochen!", sub: "Schließe dich der Community an. Hol dir Fridgify jetzt und habe deinen persönlichen Sous-Chef immer in der Tasche.", btn: "Erhältlich bei Google Play" },
      footer: { rights: "Alle Rechte vorbehalten.", motto: "Clever kochen, lecker leben." },
      privacy: { 
        title: "Datenschutzrichtlinie", 
        update: "Letzte Aktualisierung: 20. Februar 2026",
        intro: "Der Entwickler (\"wir\", \"uns\", \"unser\") hat die Fridgify-App als kostenlose App (werbefinanziert) entwickelt. DIESER DIENST wird von uns kostenlos zur Verfügung gestellt und ist für die Nutzung im Ist-Zustand vorgesehen. Diese Seite dient dazu, Besucher über unsere Richtlinien zur Erfassung, Verwendung und Offenlegung personenbezogener Daten zu informieren.",
        t1: "1. Erfassung und Nutzung von Informationen",
        p1: "Für eine bessere Erfahrung bei der Nutzung unseres Dienstes können wir verlangen, dass Sie uns bestimmte persönlich identifizierbare Informationen zur Verfügung stellen, einschließlich, aber nicht beschränkt auf:",
        l1_1: "Autorisierungsdaten:", l1_1d: "Ihre E-Mail-Adresse (wenn Sie ein Konto erstellen).",
        l1_2: "Geräteberechtigungen:", l1_2d: "Kamera und Speicher (für Fotos), Mikrofon (für Spracheingabe), Benachrichtigungen (für Ablaufwarnungen).",
        l1_3: "Nutzungsdaten:", l1_3d: "Informationen darüber, welche Zutaten Sie eingeben, um Rezepte mit Künstlicher Intelligenz zu generieren.",
        t2: "2. Drittanbieter von Diensten",
        p2: "Die App nutzt Dienste von Drittanbietern, die möglicherweise Informationen sammeln, um Sie zu identifizieren. Links zur Datenschutzrichtlinie von Drittanbietern, die von der App genutzt werden:",
        t3: "3. Protokolldaten (Log Data)",
        p3: "Wir möchten Sie darauf hinweisen, dass wir bei jedem Fehler in der App Daten (über Produkte von Drittanbietern) auf Ihrem Telefon namens Protokolldaten sammeln. Diese können Ihre IP-Adresse, Gerätenamen, Betriebssystemversion, App-Konfiguration und Uhrzeit der Nutzung umfassen.",
        t4: "4. Sicherheit",
        p4: "Wir schätzen Ihr Vertrauen, uns Ihre persönlichen Daten zur Verfügung zu stellen. Denken Sie jedoch daran, dass keine Übertragungsmethode über das Internet zu 100 % sicher und zuverlässig ist.",
        t5: "5. Privatsphäre von Kindern",
        p5: "Diese Dienste richten sich nicht an Personen unter 13 Jahren. Wenn wir feststellen, dass ein Kind unter 13 Jahren uns personenbezogene Daten zur Verfügung gestellt hat, löschen wir diese sofort.",
        t6: "6. Änderungen dieser Richtlinie",
        p6: "Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Es wird empfohlen, diese Seite regelmäßig auf Änderungen zu überprüfen.",
        contactTitle: "Kontaktiere uns",
        contactDesc: "Wenn Sie Fragen oder Anregungen zu unserer Datenschutzrichtlinie haben, zögern Sie nicht, uns zu kontaktieren:"
      }
    }
  },
  fr: {
    translation: {
      nav: { home: "Accueil", how: "Comment ça marche", privacy: "Confidentialité", download: "Télécharger" },
      hero: { badge: "Cuisine nouvelle génération", title1: "Cuisinez de bons plats avec", title2: "ce qu'il y a dans le frigo", desc: "Fridgify est votre sous-chef IA. Ne vous demandez plus «Qu'est-ce qu'on mange?» et évitez le gaspillage alimentaire.", btnMain: "Télécharger gratuitement", btnHow: "Comment ça marche" },
      how: { title: "Comment ça marche?", sub: "Trois étapes simples pour un dîner parfait", s1Title: "1. Ajoutez vos produits", s1Desc: "Entrez simplement ce que vous avez dans votre réfrigérateur.", s2Title: "2. L'IA génère", s2Desc: "Notre algorithme trouve la recette parfaite pour vous.", s3Title: "3. Dégustez", s3Desc: "Suivez les instructions détaillées et savourez votre repas!" },
      feat: { f1Title: "Recettes Intelligentes", f1Desc: "Fini les longues recherches. L'IA donne le résultat parfait en quelques secondes.", f2Title: "Contrôle de fraîcheur", f2Desc: "Recevez des alertes avant que vos aliments ne se gâtent.", f3Title: "Tout régime", f3Desc: "Vegan, sans gluten ou sportif? Personnalisez votre profil." },
      cta: { title: "Cuisinez intelligemment!", sub: "Rejoignez la communauté. Téléchargez Fridgify et gardez un sous-chef dans votre poche.", btn: "Disponible sur Google Play" },
      footer: { rights: "Tous droits réservés.", motto: "Cuisinez malin, vivez délicieux." },
      privacy: { 
        title: "Politique de confidentialité", 
        update: "Dernière mise à jour : 20 Février 2026",
        intro: "Le développeur (\"nous\", \"notre\") a créé l'application Fridgify en tant qu'application gratuite (avec publicité). CE SERVICE est fourni par nous sans frais et est destiné à être utilisé tel quel. Cette page informe les visiteurs sur nos politiques de collecte et d'utilisation des informations.",
        t1: "1. Collecte et utilisation des informations",
        p1: "Pour une meilleure expérience, nous pouvons vous demander de nous fournir certaines informations personnellement identifiables, y compris :",
        l1_1: "Données d'autorisation :", l1_1d: "Votre adresse e-mail (si vous créez un compte).",
        l1_2: "Autorisations de l'appareil :", l1_2d: "Appareil photo et stockage, microphone (pour la voix), notifications (pour les alertes d'expiration).",
        l1_3: "Données d'utilisation :", l1_3d: "Informations sur les ingrédients que vous saisissez pour générer des recettes avec l'IA.",
        t2: "2. Fournisseurs de services tiers",
        p2: "L'application utilise des services tiers qui peuvent collecter des informations utilisées pour vous identifier. Liens vers leurs politiques de confidentialité :",
        t3: "3. Données de journal (Log Data)",
        p3: "En cas d'erreur dans l'application, nous collectons des données et des informations (via des produits tiers) sur votre téléphone. Cela peut inclure votre adresse IP, le nom de l'appareil, la version du système d'exploitation, etc.",
        t4: "4. Sécurité",
        p4: "Nous apprécions votre confiance. Mais rappelez-vous qu'aucune méthode de transmission sur Internet n'est sûre et fiable à 100 %, et nous ne pouvons garantir sa sécurité absolue.",
        t5: "5. Confidentialité des enfants",
        p5: "Ces Services ne s'adressent à personne de moins de 13 ans. Si nous découvrons qu'un enfant a fourni des informations personnelles, nous les supprimons immédiatement.",
        t6: "6. Modifications de cette politique",
        p6: "Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous conseillons de consulter cette page périodiquement.",
        contactTitle: "Contactez-nous",
        contactDesc: "Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter :"
      }
    }
  },
  es: {
    translation: {
      nav: { home: "Inicio", how: "Cómo funciona", privacy: "Privacidad", download: "Descargar" },
      hero: { badge: "Cocina de otro nivel", title1: "Cocina delicioso con", title2: "lo que hay en tu nevera", desc: "Fridgify es tu sous-chef de IA. Olvídate de la pregunta «¿Qué hay para cenar?» y evita desperdiciar comida.", btnMain: "Descargar gratis", btnHow: "Cómo funciona" },
      how: { title: "¿Cómo funciona?", sub: "Tres sencillos pasos para la cena perfecta", s1Title: "1. Añade ingredientes", s1Desc: "Simplemente escribe lo que tienes actualmente en la nevera.", s2Title: "2. La IA genera", s2Desc: "Nuestro algoritmo inteligente encuentra la receta perfecta para ti.", s3Title: "3. Disfruta", s3Desc: "¡Sigue las instrucciones detalladas y disfruta de tu comida!" },
      feat: { f1Title: "Recetas Inteligentes", f1Desc: "Sin búsquedas interminables. La IA da el resultado perfecto en segundos.", f2Title: "Control de frescura", f2Desc: "Recibe alertas antes de que tu comida caduque.", f3Title: "Cualquier dieta", f3Desc: "¿Vegano, sin gluten o atlético? Personaliza tu perfil." },
      cta: { title: "¡Hora de cocinar inteligente!", sub: "Únete a la comunidad. Descarga Fridgify y lleva un sous-chef en tu bolsillo.", btn: "Disponible en Google Play" },
      footer: { rights: "Todos los derechos reservados.", motto: "Cocina inteligente, vive delicioso." },
      privacy: { 
        title: "Política de Privacidad", 
        update: "Última actualización: 20 de febrero de 2026",
        intro: "El desarrollador (\"nosotros\", \"nuestro\") creó la aplicación Fridgify como una aplicación gratuita (con publicidad). ESTE SERVICIO es proporcionado por nosotros sin costo y está destinado a utilizarse tal cual. Esta página se utiliza para informar sobre nuestras políticas de recopilación de datos.",
        t1: "1. Recopilación y uso de información",
        p1: "Para una mejor experiencia, es posible que le solicitemos que nos proporcione cierta información de identificación personal, que incluye:",
        l1_1: "Datos de autorización:", l1_1d: "Su dirección de correo electrónico (si crea una cuenta).",
        l1_2: "Permisos del dispositivo:", l1_2d: "Cámara y almacenamiento, micrófono (para voz), notificaciones (alertas de caducidad).",
        l1_3: "Datos de uso:", l1_3d: "Información sobre los ingredientes que ingresa para generar recetas usando IA.",
        t2: "2. Proveedores de servicios externos",
        p2: "La aplicación utiliza servicios de terceros que pueden recopilar información utilizada para identificarlo. Enlaces a sus políticas de privacidad:",
        t3: "3. Datos de registro (Log Data)",
        p3: "En caso de error en la aplicación, recopilamos datos e información (a través de productos de terceros) en su teléfono. Esto puede incluir su dirección IP, nombre del dispositivo, versión del sistema operativo, etc.",
        t4: "4. Seguridad",
        p4: "Valoramos su confianza. Pero recuerde que ningún método de transmisión por Internet es 100% seguro y confiable, y no podemos garantizar su absoluta seguridad.",
        t5: "5. Privacidad de los niños",
        p5: "Estos Servicios no están dirigidos a menores de 13 años. Si descubrimos que un niño nos ha proporcionado información personal, la eliminamos de inmediato.",
        t6: "6. Cambios a esta Política",
        p6: "Es posible que actualicemos nuestra Política de privacidad de vez en cuando. Le recomendamos que revise esta página periódicamente.",
        contactTitle: "Contáctenos",
        contactDesc: "Si tiene alguna pregunta o sugerencia, no dude en contactarnos:"
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