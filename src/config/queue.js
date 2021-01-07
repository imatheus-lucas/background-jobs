import Queue from 'bull'
import redisOptions from './redis'

import * as jobs from '../app/jobs';

const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisOptions),
    name: job.key,
    handle: job.handle
}))

export default {
    queues,
    add(name, data){
        const queue = this.queues.find(queue => queue.name === name);
        return queue.bull.add(data);
    },
    process(){
        return this.queues.forEach(queue =>{
            queue.bull.process(queue.handle)
            queue.bull.on('failed', (job, error) =>{
                console.log('job failed', job.data, queue.name);
                console.log(error)
           })
        })
    }
}

