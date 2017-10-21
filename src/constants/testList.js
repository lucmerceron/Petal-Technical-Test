import generateDummyTest from '../utils/generateDummyTest'

export default [
  { description: '2 + 2 = 4', run: generateDummyTest() },
  { description: 'Coffee is warm', run: generateDummyTest() },
  { description: 'Haikus are 17 syllables', run: generateDummyTest() },
  { description: 'English sentences read like Edgar Allen Poe', run: generateDummyTest() },
  { description: 'Indents are tabs not spaces always!', run: generateDummyTest() },
  { description: 'Overscores are now underscores', run: generateDummyTest() },
]
