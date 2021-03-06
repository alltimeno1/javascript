const { MongoClient } = require('mongodb')

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.nprnd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function main() {
  await client.connect()

  const users = client.db('fc21').collection('users')
  const cities = client.db('fc21').collection('cities')

  // Reset
  await users.deleteMany({})
  await cities.deleteMany({})

  await cities.insertMany([
    {
      name: '서울',
      population: 1000,
    },
    {
      name: '부산',
      population: 350,
    },
  ])

  await users.insertMany([
    {
      name: 'Foo',
      birthYear: 2000,
      contacts: [
        {
          type: 'phone',
          number: '+821011112222',
        },
        {
          type: 'home',
          number: '+82233334444',
        },
      ],
      city: '서울',
    },
    {
      name: 'Bar',
      birthYear: 1995,
      contacts: [
        {
          type: 'phone',
          number: '+821011112222',
        },
      ],
      city: '부산',
    },
    {
      name: 'Baz',
      birthYear: 1990,
      city: '부산',
    },
    {
      name: 'Poo',
      birthYear: 1993,
      city: '서울',
    },
  ])

  const cursor = users.aggregate([
    {
      $lookup: {
        from: 'cities',
        localField: 'city',
        foreignField: 'name',
        as: 'city_info',
      },
    },
    {
      $match: {
        $or: [
          {
            'city_info.population': {
              $gte: 500,
            },
          },
          {
            birthYear: {
              $gte: 1995,
            },
          },
        ],
      },
    },
    {
      $count: 'num_users',
    },
  ])

  // await users.updateOne(
  //   {
  //     name: 'Baz',
  //   },
  //   {
  //     $set: {
  //       name: 'Boo',
  //     },
  //   }
  // )

  // users.deleteOne({
  //   name: 'Boo',
  // })

  // const cursor = users.find(
  //   {
  //     birthYear: {
  //       $gte: 1990,
  //     },
  //   },
  //   {
  //     sort: {
  //       birthYear: -1,
  //     },
  //   }
  // )

  // const cursor = users.find({
  //   'contacts.type': 'phone',
  // })

  await cursor.forEach(console.log)

  await client.close()
}

main()
