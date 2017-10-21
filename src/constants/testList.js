import generateDummyTest from '../utils/generateDummyTest'

export default [
  { id: '1', description: '2 + 2 = 4', run: generateDummyTest() },
  { id: '2', description: 'Coffee is warm', run: generateDummyTest() },
  { id: '3', description: 'Haikus are 17 syllables', run: generateDummyTest() },
  { id: '4', description: 'English sentences read like Edgar Allen Poe', run: generateDummyTest() },
  { id: '5', description: 'Indents are tabs not spaces always!', run: generateDummyTest() },
  { id: '6', description: 'Overscores are now underscores', run: generateDummyTest() },
]
