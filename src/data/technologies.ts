
export interface Technology { 
  id: number,
  name: string, 
  description: string,
  rating: number,
  dailyUsage: number,
  difficulty: string,
  image: string
}


const technologies: Technology[] = [
  {
    id: 1,
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    rating: 4.5,
    dailyUsage: 70,
    difficulty: "Intermediate",
    image: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png'
  },
  {
    id: 2,
    name: "TypeScript",
    description: "A superset of JavaScript that adds static typing.",
    rating: 4.0,
    dailyUsage: 60,
    difficulty: "Advance",
    image: 'https://www.svgrepo.com/show/349540/typescript.svg'
  },
  {
    id: 3,
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    rating: 4.2,
    dailyUsage: 55,
    difficulty: "Intermediate",
    image: 'https://www.svgrepo.com/show/452075/node-js.svg'
  },
  {
    id: 4,
    name: "Angular",
    description: "A platform for building web applications.",
    rating: 4.0,
    dailyUsage: 40,
    difficulty: "Advance",
    image: 'https://www.svgrepo.com/show/452156/angular.svg'
  },
  {
    id: 5,
    name: "Docker",
    description: "A platform for developing, shipping, and running applications in containers.",
    rating: 4.3,
    dailyUsage: 45,
    difficulty: "Intermediate",
    image: 'https://www.svgrepo.com/show/448221/docker.svg'
  },
  {
    id: 6,
    name: "Vue.js",
    description: "A progressive JavaScript framework for building user interfaces.",
    rating: 4.1,
    dailyUsage: 30,
    difficulty: "Intermediate",
    image: 'https://www.svgrepo.com/show/452130/vue.svg'
  },
  {
    id: 7,
    name: "Python",
    description: "A versatile high-level programming language.",
    rating: 4.6,
    dailyUsage: 75,
    difficulty: "Beginner",
    image: 'https://www.svgrepo.com/show/452091/python.svg'
  },
  {
    id: 8,
    name: "Git",
    description: "A distributed version control system for tracking changes in source code.",
    rating: 4.4,
    dailyUsage: 65,
    difficulty: "Intermediate",
    image: 'https://www.svgrepo.com/show/452210/git.svg'
  }
]

export default technologies