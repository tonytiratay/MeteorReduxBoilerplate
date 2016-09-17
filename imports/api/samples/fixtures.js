import {Samples} from './samples.js';

FixInsertSamples = function() {

	const samplesFixtures = [
		{
			title: "Diffuseur d'Esvres (autoroute 185)",
      createdAt: new Date()
		},
		{
			title: "Diffuseur d'Esvres (autoroute 185)",
      createdAt: new Date()
		}
	];

	_.each(samplesFixtures, function (sample) {

		Samples.insert({...sample});

	});
}

if(Samples.find().count() === 0){
  FixInsertSamples();
  console.log("Chantiers fixtures insterted !");
}
