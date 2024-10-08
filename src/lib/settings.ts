document.addEventListener("DOMContentLoaded", () => {
  const Toggle = document.querySelectorAll("[data-dropdown-toggle]");
  const Menu = document.getElementById("cloaker");
  const EngineMenu = document.getElementById("engine");

  const options: { [key: string]: { name: string; icon: string } } = {
    Google: { name: "Google", icon: "/assets/media/favicons/google.png" },
    Savvas: {
      name: "Savvas Realize",
      icon: "/assets/media/favicons/savvas-realize.png",
    },
    SmartPass: { name: "SmartPass", icon: "/assets/media/favicons/smartpass.png" },
    WBO_SuperHome: {
      name: "Super Home Page",
      icon: "/assets/media/favicons/wbo.ico",
    },
    WBO_Student: {
      name: "WBO Student | Home Page",
      icon: "/assets/media/favicons/wbo.ico",
    },
    WBO_Timelines: {
      name: "Timelines - Home Page",
      icon: "/assets/media/favicons/wbo.ico",
    },
    Naviance: {
      name: "Naviance Student",
      icon: "/assets/media/favicons/naviance.png",
    },
    PBS: {
      name: "PBS LearningMedia | Teaching Resources For Students And Teachers",
      icon: "/assets/media/favicons/pbslearningmedia.ico",
    },
    PBS_StudentHome: {
      name: "Student Homepage | PBS LearningMedia",
      icon: "/assets/media/favicons/pbslearningmedia.ico",
    },
    Drive: {
      name: "My Drive - Google Drive",
      icon: "/assets/media/favicons/drive.png",
    },
    Classroom: { name: "Home", icon: "/assets/media/favicons/classroom.png" },
    Schoology: {
      name: "Home | Schoology",
      icon: "/assets/media/favicons/schoology.png",
    },
    Gmail: { name: "Gmail", icon: "/assets/media/favicons/gmail.png" },
    Clever: { name: "Clever | Portal", icon: "/assets/media/favicons/clever.png" },
    Khan: {
      name: "Dashboard | Khan Academy",
      icon: "/assets/media/favicons/khan.png",
    },
    Dictionary: {
      name: "Dictionary.com | Meanings & Definitions of English Words",
      icon: "/assets/media/favicons/dictionary.png",
    },
    Thesaurus: {
      name: "Synonyms and Antonyms of Words | Thesaurus.com",
      icon: "/assets/media/favicons/thesaurus.png",
    },
    IF_Campus: {
      name: "Infinite Campus",
      icon: "/assets/media/favicons/campus.png",
    },
    IXL: { name: "IXL | Dashboard", icon: "/assets/media/favicons/ixl.png" },
    Canvas: { name: "Dashboard", icon: "/assets/media/favicons/canvas.png" },
    LinkIt: { name: "Test Taker", icon: "/assets/media/favicons/linkit.ico" },
    Edpuzzle: { name: "Edpuzzle", icon: "/assets/media/favicons/edpuzzle.png" },
    iReady_Math: {
      name: "Math To Do, i-Ready",
      icon: "/assets/media/favicons/i-ready.ico",
    },
    iReady_Reading: {
      name: "Reading To Do, i-Ready",
      icon: "/assets/media/favicons/i-ready.ico",
    },
    ClassLink: { name: "Login", icon: "/assets/media/favicons/classlink-login.png" },
    GoogleMeet: {
      name: "Google Meet",
      icon: "/assets/media/favicons/google-meet.png",
    },
    GoogleDocs: {
      name: "Google Docs",
      icon: "/assets/media/favicons/google-docs.ico",
    },
    GoogleSlides: {
      name: "Google Slides",
      icon: "/assets/media/favicons/google-slides.ico",
    },
    Wikipedia: { name: "Wikipedia", icon: "/assets/media/favicons/wikipedia.png" },
    Britannica: {
      name: "Encyclopedia Britannica | Britannica",
      icon: "/assets/media/favicons/britannica.png",
    },
    Ducksters: { name: "Ducksters", icon: "/assets/media/favicons/ducksters.png" },
    Minga: {
      name: "Minga – Creating Amazing Schools",
      icon: "/assets/media/favicons/minga.png",
    },
    iReady_Games: {
      name: "Learning Games, i-Ready",
      icon: "/assets/media/favicons/i-ready.ico",
    },
    NoRedInk: {
      name: "Student Home | NoRedInk",
      icon: "/assets/media/favicons/noredink.png",
    },
    Desmos: {
      name: "Desmos | Graphing Calculator",
      icon: "/assets/media/favicons/desmos.png",
    },
    Newsela_Binder: {
      name: "Newsela | Binder",
      icon: "/assets/media/favicons/newsela.png",
    },
    Newsela_Assignments: {
      name: "Newsela | Assignments",
      icon: "/assets/media/favicons/newsela.png",
    },
    Newsela_Home: {
      name: "Newsela | Instructional Content Platform",
      icon: "/assets/media/favicons/newsela.png",
    },
    PowerSchool_SignIn: {
      name: "Student and Parent Sign In",
      icon: "/assets/media/favicons/powerschool.png",
    },
    PowerSchool_Grades: {
      name: "Grades and Attendance",
      icon: "/assets/media/favicons/powerschool.png",
    },
    PowerSchool_TeacherComments: {
      name: "Teacher Comments",
      icon: "/assets/media/favicons/powerschool.png",
    },
    PowerSchool_StandardsGrades: {
      name: "Standards Grades",
      icon: "/assets/media/favicons/powerschool.png",
    },
    PowerSchool_Attendance: {
      name: "Attendance",
      icon: "/assets/media/favicons/powerschool.png",
    },
    Nearpod: { name: "Nearpod", icon: "/assets/media/favicons/nearpod.png" },
    StudentVUE: {
      name: "StudentVUE",
      icon: "/assets/media/favicons/studentvue.ico",
    },
    Quizlet: {
      name: "Flashcards, learning tools and textbook solutions | Quizlet",
      icon: "/assets/media/favicons/quizlet.webp",
    },
    GoogleForms: {
      name: "Start your quiz",
      icon: "/assets/media/favicons/googleforms.png",
    },
    DeltaMath: { name: "DeltaMath", icon: "/assets/media/favicons/deltamath.png" },
    Kami: { name: "Kami", icon: "/assets/media/favicons/kami.png" },
    GoGuardian_Admin: {
      name: "Restricted",
      icon: "/assets/media/favicons/goguardian-lock.png",
    },
    GoGuardian_Teacher: {
      name: "Uh oh!",
      icon: "/assets/media/favicons/goguardian.png",
    },
    WorldHistory: {
      name: "World History Encyclopedia",
      icon: "/assets/media/favicons/worldhistoryencyclopedia.png",
    },
    BIM_AssignmentPlayer: {
      name: "Assignment Player",
      icon: "/assets/media/favicons/bim.ico",
    },
    BIM: { name: "Big Ideas Math", icon: "/assets/media/favicons/bim.ico" },
  };

  const EngineOptions: { [key: string]: string } = {
    Google: "https://www.google.com/search?q=",
    Bing: "https://www.bing.com/search?q=",
    DuckDuckGo: "https://duckduckgo.com/?q=",
    Qwant: "https://www.qwant.com/?q=",
    Startpage: "https://www.startpage.com/search?q=",
    SearchEncrypt: "https://www.searchencrypt.com/search/?q=",
    Ecosia: "https://www.ecosia.org/search?q=",
  };

  const outside = (event: MouseEvent) => {
    for (const toggleElement of Toggle) {
      const Menu = document.getElementById(
        toggleElement.getAttribute("data-dropdown-toggle") || "",
      );

      if (Menu) {
        const inside =
          Menu.contains(event.target as Node) ||
          toggleElement.contains(event.target as Node);
        if (!inside) {
          Menu.classList.add("hidden");
        }
      }
    }
  };

  for (const ToggleElement of Toggle) {
    ToggleElement.addEventListener("click", () => {
      const DropdownID = ToggleElement.getAttribute("data-dropdown-toggle");
      const DropdownMenu = document.getElementById(DropdownID || "");

      if (DropdownMenu) {
        DropdownMenu.classList.toggle("hidden");
      }
    });
  }

  if (Menu) {
    const links = Menu.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const value = link.getAttribute("data-value");
        if (value && options[value]) {
          const { name, icon } = options[value];
          localStorage.setItem("title", name);
          localStorage.setItem("icon", icon);
          window.location.reload();
        }
      });
    }
  }

  if (EngineMenu) {
    const EngineLinks = EngineMenu.querySelectorAll("a");
    for (const link of EngineLinks) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const value = link.getAttribute("data-value");
        if (value && EngineOptions[value]) {
          localStorage.setItem("engine", EngineOptions[value]);
          localStorage.setItem("notification", "engine");
          window.location.reload();
        }
      });
    }
  }

  document.addEventListener("click", outside);
});

const ShowNotification = (message: string, type: "default" | "engine") => {
  const Container = document.getElementById(
    type === "engine" ? "notification-container-engine" : "notification-container",
  );

  if (Container) {
    const Notification = Container.querySelector("[role='alert']");
    if (Notification) {
      const fontBoldElement = Notification.querySelector("p.font-bold");
      if (fontBoldElement) {
        fontBoldElement.textContent = message;
      }
      Container.style.display = "block";
      setTimeout(() => {
        Container.style.display = "none";
        localStorage.removeItem("notification");
      }, 3000);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const NotificationMessage = localStorage.getItem("notification");

  if (NotificationMessage === "engine") {
    ShowNotification("Search engine updated", "engine");
  }
});
