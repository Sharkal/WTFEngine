
$(function() {

    // Populate using an object literal

    // WTF.init({

    //     heading: [
    //         "It's a fucking",
    //         "Check this shit out, a fucking"
    //     ],
    //     response: [
    //         "Already fucking seen one",
    //         "Give me a-fucking-nother one",
    //         "Don't really give a fuck"
    //     ],
    //     template: [
    //         "Big @color @animal",
    //         "Silly @animal with @color fur"
    //     ],
    //     animal: [
    //         "dog",
    //         "cat",
    //         "rabbit"
    //     ],
    //     color: [
    //         "red",
    //         "blue",
    //         "green",
    //         "yellow"
    //     ]
    // });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

	// Populate using an object literal

     WTF.init({

         heading: [
             "Yeah! Ein verdammter",
             "Kuckst du! Das ist ein"
         ],
         response: [
             "Kennt man doch schon...",
             "Ach, leck mich doch!",
             "Geh sterben!"
         ],
         template: [
             "@adjective @race @profession",
             "aus @location, der",
			 "@backstory"
         ],
         adjective: [
             "fetter",
             "kleiner",
             "naiver",
			 "spindeldürrer",
			 "wahnsinniger",
			 "ängstlicher",
			 "rassistischer",
			 "aufbrausender",
			 "vornehmer",
			 "rechtschaffener",
         ],
         race: [
             "Varaz",
             "Oranir",
             "Ukgnat"
         ],
		 profession: [
             "Soldat",
			 "Söldner",
			 "Barbar",
			 "Stammeskrieger",
             "Myramit",
			 "Meuchelklinge",
			 "Giftmischer",
			 "Schatten",
             "Alchemist",
			 "Druide",
			 "Schamane",
			 "Priester",
			 "Jäger",
			 "Schmied",
			 "Barde",
			 "Tierfänger",
			 "Erfinder",
			 "Schatzjäger",
			 "Pirat",
			 "Dieb",
			 "Myotänzer (Feuer)",
			 "Myotänzer (Wasser)",
			 "Myotänzer (Erde)",
			 "Myotänzer (Luft)",
			 "Myotänzer (Botanik)",
			 "Myotänzer (Beherrschung)",
			 "Myotänzer (Illusion)",
			 "Myotänzer (Existenz)",
			 "Myotänzer (Beschwörung)",
			 "Myotänzer (Anatomik)",
			 "Myotänzer (Dimentorik)",
			 "Myotänzer (Runetik)",
			 "Myotänzer (Stimulatorik)",
			 "Myotänzer (Sensorik)",
			 "Myotänzer (Konservik)"
         ]
		 location: [
             "der Hauptstadt Oitaria",
             "Reiffels",
             "der Mangrovenstadt Mangora",
			 "einem kleinen Jägerdorf",
			 "den Sümpfen von Bayriill",
			 "dem gesetzlosen Ulmaret",
			 "den Nomadenstämmen von Kaheli",
         ],
		 backstory: [
             "Varaz",
             "Oranir",
             "Ukgnat"
         ]
     });
});