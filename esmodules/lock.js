/**
 * A single Lock.
 * @typedef {Object} Lock
 * @property {string} id - A unique ID to identify this todo.
 * @property {string} pin - The combination to the lock.
 * @property {boolean} isOpen - Marks whether the lock is open.
 * @property {string} userId - The user's id which owns this ToDo.
 */

class Lock {
  static ID = 'locks';
  
  static FLAGS = {
    LOCKS: 'locks'
  }
  
  static TEMPLATES = {
    LOCK: `modules/${this.ID}/templates/lock.hbs`
  }

  static log(force, ...args) {  
    const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugValue(this.ID);

    if (shouldLog) {
      console.log(this.ID, '|', ...args);
    }
  }
}

// Anytime you want to log something to the console, instead of doing console.log('todo-list | ', 'foo') 
// and risking that be in a release, do ToDoList.log(false, 'foo') instead.
Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
  registerPackageDebugFlag(Lock.ID);
});

class LockData {
  // all locks for all users
  static get allLocks() {
    const allLocks = game.scenes.reduce((accumulator, scene)=>{
      const sceneLocks = this.getLocksForScene(scene.id)

      return {
        ...accumulator,
        ...sceneLocks
      }
    }, {})

    return allLocks
  }

  // get all locks for a given user
  static getLocksForScene(sceneId) {
    return game.scenes.get(sceneId)?.getFlag(Lock.ID, Lock.FLAGS.LOCKS); 
  }

  static createLock(sceneId, lockData) {
    // create a new locks for a given scene
    // generate a random id for this new ToDo and populate the userId
    const newLock = {
      ...lockData,
      id: foundry.utils.randomID(16),
      sceneId,
    }

    // construct the update to insert the new ToDo
    const newLocks = {
      [newLock.id]: newLock
    }

    // update the database with the new ToDos
    return game.scenes.get(lockId)?.setFlag(Lock.ID, Lock.FLAGS.LOCKS, newLocks);
  }

  // update a specific locks by id with the provided updateData
  static updateLock(lockId, updateData) {
    const relevantLock = this.allLocks[lockId];

    const updatedLock = {
      [lockId]: updateData
    }

    return game.scenes.get(relevantLock.sceneId)?.setFlag(Lock.ID, Lock.FLAGS.LOCKS, updatedLock);
  }

  // delete a specific locks by id
  static deleteLock(sceneId, lockId) {}
}