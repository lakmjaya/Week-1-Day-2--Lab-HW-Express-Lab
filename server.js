// Load express
const express = require('express');

// Create our express app
const app = express();

const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('dunstant', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' ).replace('#explain#','<div style="color:blue;">'+ options.explain +'</div>')
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'dunstant') // register the hypatia view engine

app.get('/page1', (req, res) => {
    res.render('template_one', { title: 'First', message: 'Ramanujan (film)', content: 'Ramanujan is a 2014 biographical film based on the life of Indian mathematician Srinivasa Ramanujan.' })
  })
  
  app.get('/page2', (req, res) => {
    res.render('template_one', { title: 'Second', message: 'The Man Who Knew Infinity (2015)', content: 'The story of the life and academic career of the pioneer Indian mathematician, Srinivasa Ramanujan, and his friendship with his mentor, Professor G.H. Hardy.' })
  })
  
  app.get('/page3', (req, res) => {
    res.render('template_one', { title: 'Third', message: 'Ravana', content: 'Ravana is a rakshasa king of the island of Lanka, and the chief antagonist of the Hindu epic Ramayana and its adaptations. In the Ramayana, Ravana is described to be the eldest son of sage Vishrava and rakshasi Kaikesi.' })
  })
  app.get('/page4', (req, res) => {
    res.render('template_one', { title: 'Fourth', message: 'Shivnarine Chanderpaul', content: 'Shivnarine "Shiv" Chanderpaul is a Guyanese cricket coach and former captain of the West Indies cricket team. Considered one of the greatest batsmen of his era, Chanderpaul is the first Indo-Caribbean to play 100 Tests for the West Indies. Chanderpaul captained West Indies in 14 Tests and 16 One Day Internationals.' })
  })
  
  app.get('/page5', (req, res) => {
    res.render('template_one', { title: 'Fifth', message: 'Sanghamitta', content: 'Few disciples were as important as Sanghamitta in the early history of Buddhism. As a young nun, Sanghamitta fearlessly set sail from India to Sri Lanka, where she helped establish Theravada Buddhism.' })
  })
  
  app.get('/page6', (req, res) => {
    res.render('template_two', { title: 'Sixth', message: 'Samma Kammanto', content: 'Right Action is the fourth of the eight path factors in the Noble Eightfold Path, and belongs to the virtue division of the path.', explain:'One tries to abandon wrong action & to enter into right action: This is one\'s right effort. One is mindful to abandon wrong action & to enter & remain in right action: This is one \'s right mindfulness. Thus these three qualities — right view, right effort, & right mindfulness — run & circle around right action.'})
  })
  app.get('/page7', (req, res) => {
    res.render('template_one', { title: 'Seventh', message: 'King Ashoka', content: 'Upset with his violent conquests that killed hundreds of thousands, the Indian king Ashoka embraced Buddhism and treated his subjects humanely.' })
  })
  
  app.get('/page8', (req, res) => {
    res.render('template_one', { title: 'Eighth', message: 'Himalayan Meditation', content: 'Himalayan Meditation understands this and opens multiple doorways for you with a variety of nature sounds , music with different types and levels of Meditations ranging from Mindfulness to Breath Meditation, Yantra to Kundalini Meditations and Mantra meditations to Prana Kriya.' })
  })
  
  app.get('/page9', (req, res) => {
    res.render('template_two', { title: 'Nineth', message: 'Samma Sankappo', content: 'Right Resolve (or Right Intention) is the second of the eight path factors in the Noble Eightfold Path, and belongs to the wisdom division of the path.', explain: 'And what is right resolve? Being resolved on renunciation, on freedom from ill-will, on harmlessness: This is called right resolve.' })
  })
  app.get('/page10', (req, res) => {
    res.render('template_two', { title: 'Tenth', message: 'Samma Sati', content: 'Right Mindfulness is the seventh of the eight path factors in the Noble Eightfold Path, and belongs to the concentration division of the path.', explain: 'And what is right mindfulness? There is the case where a monk remains focused on the body in & of itself — ardent, alert, & mindful — putting aside greed & distress with reference to the world. He remains focused on feelings in & of themselves... the mind in & of itself... mental qualities in & of themselves — ardent, alert, & mindful — putting aside greed & distress with reference to the world. This is called right mindfulness...' })
  })
// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});