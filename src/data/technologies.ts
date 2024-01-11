import { ImageSourcePropType } from 'react-native'

export interface Technology { 
  id: number,
  name: string, 
  description: string,
  rating: number,
  dailyUsage: number,
  difficulty: string,
  image: ImageSourcePropType
}


const technologies: Technology[] = [
  {
    id: 1,
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    rating: 4.5,
    dailyUsage: 70,
    difficulty: "Intermediate",
    image: require('../../assets/technologies/react.png')
  },
  {
    id: 2,
    name: "TypeScript",
    description: "A superset of JavaScript that adds static typing.",
    rating: 4.0,
    dailyUsage: 60,
    difficulty: "Advance",
    image: require('../../assets/technologies/typescript.png')
  },
  {
    id: 3,
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    rating: 4.2,
    dailyUsage: 55,
    difficulty: "Intermediate",
    image: require('../../assets/technologies/nodejs.png')
  },
  {
    id: 4,
    name: "Angular",
    description: "A platform for building web applications.",
    rating: 4.0,
    dailyUsage: 40,
    difficulty: "Advance",
    image: require('../../assets/technologies/angular.png')
  },
  {
    id: 5,
    name: "Docker",
    description: "A platform for developing, shipping, and running applications in containers.",
    rating: 4.3,
    dailyUsage: 45,
    difficulty: "Intermediate",
    image: require('../../assets/technologies/docker.png')
  },
  {
    id: 6,
    name: "Vue.js",
    description: "A progressive JavaScript framework for building user interfaces.",
    rating: 4.1,
    dailyUsage: 30,
    difficulty: "Intermediate",
    image: require('../../assets/technologies/vue.png')
  },
  {
    id: 7,
    name: "Python",
    description: "A versatile high-level programming language.",
    rating: 4.6,
    dailyUsage: 75,
    difficulty: "Beginner",
    image: require('../../assets/technologies/python.png')
  },
  {
    id: 8,
    name: "Git",
    description: "A distributed version control system for tracking changes in source code.",
    rating: 4.4,
    dailyUsage: 65,
    difficulty: "Intermediate",
    image: require('../../assets/technologies/git.png')
  }
]

export default technologies