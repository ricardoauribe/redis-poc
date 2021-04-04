import Redis from 'ioredis'

const redis = new Redis();

redis.set('name', 'Ricardo')
redis.get('name', (err, result) => {
	console.log(result)
})