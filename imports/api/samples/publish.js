import {Samples} from './samples.js'

Meteor.publish("allSamples", function(){
	return Samples.find();
});
