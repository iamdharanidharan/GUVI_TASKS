var cat = {
    name:'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omlette'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }

   cat.height= 25;
   cat.weight = 5;
   cat.name = 'Fluffyy';

   console.log(cat);
   
   console.log('\nActivities:');
   for(i in cat.activities)
    console.log(cat.activities[i]);
    
    console.log('\nCat friends:');
   for(i in cat.catFriends)
    console.log(cat.catFriends[i].name);
    
    let totalWeightOfFriends = 0;
    for(i in cat.catFriends)
      totalWeightOfFriends += cat.catFriends[i].weight;
     console.log('\nTotal weight of friends: '+ totalWeightOfFriends);
     
     console.log('\nAll Activities:');
     
     for(i in cat.activities){
         console.log(cat.activities[i]);
     }
     for(i in cat.catFriends){
         for(j in cat.catFriends[i].activities){
             console.log(cat.catFriends[i].activities[j]);
         }
     }
     
     console.log('\n2 More activities');
     cat.catFriends[0].activities.push('pur','fight');
     cat.catFriends[1].activities.push('run around','bite');
     console.log(cat.catFriends[0].activities);
     console.log(cat.catFriends[1].activities);
     
     cat.catFriends[0].furcolor = 'brown';
     console.log('Fur color update: ');
     console.log(cat.catFriends[0]);