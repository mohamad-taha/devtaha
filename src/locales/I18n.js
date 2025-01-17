import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          aboutMe: "About Me",
          curiousAboutMe: "Curious about me? Here you have it:",
          whoIAm: ` Hello! I'm Mohamad Taha Kasir, hailing from Aleppo city,
                  Syria. I am currently studying Informatics Engineering at
                  Ittihad Private University, where I am learning the latest
                  technologies and skills needed in the field of programming and
                  software development. My journey as a frontend developer began
                  in 2023, with my first experience in programming at the
                  "Projects SY" institute. Since then, I've been passionate
                  about developing user interfaces and enhancing user
                  experiences by designing and building interactive and
                  attractive web applications.`,
          mySikllsInclude: "*My skills include:*",
          mySkillOne: `- Developing user interfaces using HTML, CSS, and
                    JavaScript.`,
          mySkillTwo: `- Mastering frameworks like React to build modern and
                    innovative web applications.`,
          mySkillThree: `- Optimizing website performance to ensure a smooth and fast
                    user experience.`,
          mySikllFour: `- Creating responsive websites that work seamlessly on all
                    screen sizes and devices.`,
          iHavePassion: ` I'm always eager to learn more and keep up with the latest
                  technologies in web development. My goal is to build websites
                  and applications that add value and meet the users' goals. If
                  you're looking for a frontend developer with the skills and
                  passion to turn your digital`,
          about: "About",
          experience: "Experience",
          work: "Work",
          contact: "Contact",
          resumeBtn: "Download Resume",
          hi: "Hi,",
          myName: "I'm Mohamad Taha ",
          myCareer: `I'm a frontend developer specializing in creating exceptional web
                    applications using React. With over 1 year of experience in web
                    development, I've had the pleasure of working with a variety of
                    clients to deliver high-quality coding solutions.`,
          skills: "SKills",
          theTechnicles: `The skills, tools, libraries, frameworks and technologies I am
            really good at:`,
          quickSummaryOfMyEsxperience:
            "Here is a quick summary of my most recent experiences:",
          frontendStudent: "Frontend Developer Student",
          frontendTrainee: "Frontend Developer Trainee",
          builtUserInterfacesWith:
            "Built user interfaces with HTML, CSS, and JavaScript.",
          usingFigma: "Designed layouts based on Figma prototypes.",
          usingApi: "Integrated APIs and used React for projects.",
          achievedRating: "Achieved 88% performance rating.",
          receivedDigitalCertificate:
            "Received a digital certificate available on the company's official page.",
          learnWebTech:
            "Learned modern web technologies like React and MUI, and built interactive apps with APIs.",
          createdResponsiveDesign:
            "Created responsive and user-friendly interfaces.",
          completedSeveralProjects:
            "Completed several projects, showing problem solving skills.",
          earnedWebCertification:
            "Earned a Frontend Development Certification upon successful completion of the program.",
          someOfMyProjects: "Some of the noteworthy projects I have built:",
          blogs: "Blogs",
          blogsDesc: `Explore a wide range of stories, interviews, and expert insights on our blog platform.
                    Dive into articles covering leadership, design, technology, and more, written by
                    professionals and thought leaders. Stay updated on the latest trends and ideas
                    by subscribing to our newsletter. Whether you're seeking inspiration, knowledge,
                    or practical tips, this is the perfect space to learn and grow. Start exploring today!`,
          edupress: "EduPress",
          edupressDesc: `EduPress is an online learning platform designed to help you build skills
                        and achieve your educational goals.
                        Offering a variety of courses across top categories like Art & Design,
                        Development, Communication, and Marketing, EduPress provides a seamless and engaging
                        learning experience. With featured courses, expert instructors, and user-friendly tools
                        like LearnPress LMS,
                        it caters to students and educators alike.
                        Whether you’re starting a new career,
                        enhancing your knowledge, or teaching others, EduPress is your go-to
                        platform for growth and success.`,
          multiStepsForm: "Multi-Steps Form",
          multiStepsDesc: `This is a Multi-Step Form designed with a modern and user-friendly interface that simplifies the process 
                  of data entry by breaking it into smaller, manageable steps. The form features
                  a sidebar navigation that displays the five steps of the process in a clear and structured manner,
                  allowing users to easily track their progressز The design is clean and minimalist, incorporating
                  vibrant colors to highlight the active step and ensure a visually appealing experience. 
                  A prominent Next Step button is included to guide users seamlessly through the form. 
                  This form is ideal for use cases such as onboarding, subscriptions,
                  or any multi-step data collection process.`,
          managePosts: "Manage Posts",
          managePostsDesc: `This is a CRUD Posts Application for creating, reading, updating, and deleting posts.
                          It features a clean and responsive design, allowing users to manage posts effortlessly.
                          Users can add new posts, view all posts in an organized layout,
                          and edit or delete them with intuitive action buttons. 
                          Ideal for managing blogs, announcements, or any content efficiently.`,
          viewMore: "View More",
          getInTouch: "Get in touch",
          lookingForDeveloper: `What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.`,
          youCanFindMe: "You may also find me on these platforms!",
          footerParagraph: "© 2025 Portfoilo website | Designed and coded by",
          myFullName: "Mohamad Taha Kasir",
          changeTo: "تغيير إلى العربية",
        },
      },
      ar: {
        translation: {
          aboutMe: "نبذة عني",
          curiousAboutMe: "هل تريد أن تعرف عني؟ إليك ما يلي:",
          whoIAm: `مرحبًا! أنا محمد طه قصير، من مدينة حلب، سوريا. أدرس حاليًا هندسة المعلوماتية في جامعة الاتحاد الخاصة،
                  حيث أتعلم أحدث التقنيات والمهارات اللازمة في مجال البرمجة 
                  وتطوير البرمجيات. بدأت رحلتي كمطور واجهة مستخدم 
                  في عام 2023، مع تجربتي الأولى في البرمجة في معهد "Projects SY".
                  ومنذ ذلك الحين، كنت شغوفًا بتطوير واجهات المستخدم 
                  وتعزيز تجارب المستخدم من خلال تصميم وبناء تطبيقات ويب تفاعلية وجذابة.`,
          mySikllsInclude: "*مهارات تتضمن*",
          mySkillOne:
            "- تطوير واجهات المستخدم باستخدام HTML و CSS و JavaScript.",
          mySkillTwo: `- إتقان أطر العمل مثل React لبناء تطبيقات ويب حديثة ومبتكرة.`,
          mySkillThree: "- تحسين أداء الموقع لضمان تجربة مستخدم سلسة وسريعة.",
          mySikllFour:
            "- إنشاء مواقع ويب متجاوبة تعمل بسلاسة على جميع أحجام الشاشات والأجهزة.",
          iHavePassion: `أنا دائمًا حريص على تعلم المزيد ومواكبة أحدث التقنيات في تطوير الويب. 
                        هدفي هو بناء مواقع الويب والتطبيقات التي تضيف قيمة وتلبي أهداف المستخدمين. 
                        إذا كنت تبحث عن مطور واجهة أمامية يتمتع بالمهارات 
                        والشغف لتحويل أعمالك الرقمية إلى واقع ملموس، فيرجى الاتصال بي.`,
          about: "حول",
          experience: "الخبرة",
          work: "المشاريع",
          contact: "إتصل بنا",
          resumeBtn: "تحميل السيرة الذاتية",
          hi: "مرحبا,",
          myName: "أنا محمد طه قصير",
          myCareer: `أنا مطور واجهة 
                    أمامية متخصص في إنشاء تطبيقات ويب استثنائية باستخدام React.
                    مع أكثر من عام من الخبرة في تطوير الويب، 
                    كان من دواعي سروري العمل
                    مع مجموعة متنوعة من العملاء لتقديم حلول ترميز عالية الجودة.`,
          skills: "المهارات",
          theTechnicles: `المهارات والأدوات والمكتبات والأطر والتقنيات التي أجيدها حقًا:`,
          quickSummaryOfMyEsxperience: "فيما يلي ملخص سريع لخبرتي الأخيرة:",
          frontendStudent: "طالب مطور واجهات أمامية",
          frontendTrainee: "متدرب مطور واجهة أمامية",
          builtUserInterfacesWith:
            " إنشاء واجهات المستخدم باستخدام HTML و CSS و JavaScript.",
          usingFigma: " تصميم التخطيطات بناءً على نماذج Figma الأولية.",
          usingApi: " دمج API واستخدام React للمشاريع.",
          achievedRating: "حققت معدل أداء %88",
          receivedDigitalCertificate:
            "حصلت على شهادة رقمية متاحة على الصفحة الرسمية للشركة.",
          learnWebTech:
            "تعلمت تقنيات الويب الحديثة مثل React وMUI، وقمت ببناء تطبيقات تفاعلية باستخدام واجهات برمجة التطبيقات.",
          createdResponsiveDesign:
            "إنشاء واجهات سريعة الاستجابة وسهلة الاستخدام.",
          completedSeveralProjects:
            "أكملت العديد من المشاريع، تظهر مهارات حل المشكلات.",
          earnedWebCertification:
            "حصلت على شهادة تطوير واجهة المستخدم الأمامية عند إكمال البرنامج بنجاح.",
          someOfMyProjects: "بعض المشاريع الجديرة بالملاحظة التي قمت ببنائها",
          blogs: "المدونات",
          blogsDesc: `استكشف مجموعة واسعة من القصص والمقابلات ورؤى الخبراء على منصة مدونتنا.
                      انغمس في المقالات التي تغطي القيادة والتصميم 
                      والتكنولوجيا والمزيد، والتي كتبها محترفون وقادة فكريون. ابقَ على اطلاع بأحدث الاتجاهات والأفكار
                      من خلال الاشتراك في النشرة الإخبارية الخاصة بنا. سواء كنت تبحث عن الإلهام أو المعرفة
                      أو النصائح العملية، فهذه هي المساحة المثالية للتعلم والنمو. ابدأ الاستكشاف اليوم!`,
          edupress: "إديوبريس",
          edupressDesc: `إديوبريس عبارة عن منصة تعليمية 
                        عبر الإنترنت مصممة لمساعدتك على بناء المهارات وتحقيق أهدافك التعليمية.
                        تقدم إديوبريس مجموعة متنوعة من الدورات التدريبية عبر 
                        الفئات العليا مثل الفن والتصميم والتطوير والتواصل والتسويق، وتوفر تجربة تعليمية سلسة وجذابة. 
                        مع الدورات المميزة والمدربين الخبراء والأدوات سهلة الاستخدام فهي تلبي احتياجات 
                        الطلاب والمعلمين على حد سواء.
                        سواء كنت تبدأ مهنة جديدة أو
                        تعزز معرفتك أو تعلم الآخرين، فإن إديوبريس هي منصتك المفضلة للنمو والنجاح.`,
          multiStepsForm: "نموذج متعدد الخطوات",
          multiStepsDesc: `هذا نموذج متعدد الخطوات مصمم بواجهة حديثة وسهلة الاستخدام تبسط عملية
                          إدخال البيانات من خلال تقسيمها إلى خطوات أصغر يمكن إدارتها. يتميز النموذج
                          بشريط جانبي للتنقل يعرض الخطوات الخمس للعملية بطريقة واضحة ومنظمة،
                          مما يسمح للمستخدمين بتتبع تقدمهم بسهولة. التصميم نظيف وبسيط، ويتضمن
                          ألوانًا نابضة بالحياة لتسليط الضوء على الخطوة النشطة وضمان تجربة جذابة بصريًا.
                          تم تضمين زر الخطوة التالية البارز لتوجيه المستخدمين بسلاسة عبر النموذج.
                          هذا النموذج مثالي 
                          لحالات الاستخدام مثل التوجيه أو الاشتراكات أو أي عملية جمع بيانات متعددة الخطوات.`,
          managePosts: "إدارة المنشورات",
          managePostsDesc: `هذا تطبيق CRUD لإنشاء المنشورات وقراءتها وتحديثها وحذفها.
                          يتميز بتصميم نظيف وسريع الاستجابة، مما يسمح للمستخدمين بإدارة المنشورات دون عناء.
                          يمكن للمستخدمين إضافة منشورات جديدة، وعرض جميع المنشورات في تخطيط منظم،
                          وتحريرها أو حذفها باستخدام أزرار الإجراءات البديهية.
                          مثالي لإدارة المدونات أو الإعلانات أو أي محتوى بكفاءة.`,
          viewMore: "عرض المزيد",
          getInTouch: "ابقى على تواصل معنا",
          lookingForDeveloper:
            "ما هو التالي؟ لا تتردد في التواصل معي إذا كنت تبحث عن مطور أو لديك استفسار أو تريد ببساطة التواصل.",
          youCanFindMe: "تستطيع أن تجدني على هذه المنصات!",
          footerParagraph: "© 2025 موقع المحفظة | تصميم وبرمجة بواسطة",
          myFullName: "محمد طه قصير",
          changeTo: "change to English",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
