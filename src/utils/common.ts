const QUESTIONS_ARRAY = [
  {
    id: "1",
    question: "What library is next.js based upon?",
    options: [
      { label: "Reactjs", value: "react" },
      { label: "Vuejs", value: "vue" },
      { label: "Angular", value: "angular" },
    ],
    submitted: false,
    answerred: "",
    answer: "react",
  },
  {
    id: "2",
    question: "Main advantages of next.js",
    options: [
      { label: "Server Side Rendering", value: "ssr" },
      { label: "client Side Rendering", value: "csr" },
      { label: "Static Site Generation", value: "ssg" },
      { label: "SEO", value: "seo" },
      { label: "All the above", value: "all" },
    ],
    submitted: false,
    answerred: "",
    answer: "all",
  },
];

export { QUESTIONS_ARRAY };
