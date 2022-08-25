import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { console.error('putDb not implemented'); 

  //create a connection
  const jateDb = await openDB('jate', 1);

  //create a transaction
    const tx = jateDb.transaction('jate', 'readWrite');

    //object store
      const store = tx.objectStore('jate');

        //stores & passes
        const request = store.put({ id: 1, value: content});

          //confirmation
          const result = await request;
            console.log("data has been saved to the database, woo", result);
        };

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => { console.error('getDb not implemented'); 
  //creates a connection to db
  const jateDb = await openDB('jate', 1);

  //creates new transaction to specifiy db & the privileges associated w/ it.
    const tx = jateDb.transaction('jate', 'readonly');

    //object store
      const store = tx.objectStore('jate');

      //gathers all data within db
        const request = store.getAll();

        //confirms the request as above
          const result = await request;
            console.log('result.value', result);
              return result?.value;
      };

initdb();
