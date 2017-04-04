// Array of all the questions and choices to populate the questions. This might be saved in some JSON file or a database and we would have to read the data in.
var all_questions = [{
  question_string: "Name the milestone at one month:",
  choices: {
    correct: "Focuses on the face of the person in front of the child, lifts head, moro reflex, turns to sound, turns head to sound",
    wrong: ["rolls front to back, grasps a rattle, laughs, is soothed by parent's voice, orients head to direction of a voice", "lifts head while on belly, eye tracking past midline, alerts to voices and sounds, coos, has a social smile", "sits momentarily while propped up on hands, sits without back support, transfers objects hand to hand, raking grasp, responds to name, babbles, has stranger anxiety"]
  }
}, {
	question_string: "Name the milestone at four months:",
	choices: {
	correct: "rolls front to back, grasps a rattle, laughs, is soothed by parent's voice, orients head to direction of a voice",
		wrong: [
			"recognizes parent, tracks eyes past midline, is alert to sound", "focuses on the face of the person in front of the child, lifts head, moro reflex, turns to sound, turns head to sound", "babbles, responds to name, rolls both ways, sits alone unsupported, transfers objects from one hand to another"]
	}
},
	{
	question_string: "Name the milestone at four months:",
	choices: {
	correct: "Follows a light 180 degrees, bears weight, holds small toy, reaches for things, rolls (front to back), turns to sound",
		wrong: [ "focuses on the face of the person in front of the child, lifts head, moro reflex, turns to sound, turns head to sound", "lifts head while on belly, eye tracking past midline, alerts to voices and sounds, coos, has a social smile", "babbles, responds to name, rolls both ways, sits alone unsupported, transfers objects from one hand to another"]
	}
},
{
	question_string: "Name the milestone at four months: ",
	choices: {
	correct: "sits/support, cooing, posterior fontanel is closed, bats at objects",
		wrong: ["sits momentarily propped up on hands, sits without back support, transfers objects hand to hand, raking grasp, responds to name, babbles, has stranger anxiety",
"pulls to stand, cruises on furniture, 3-finger pincer grasp, holds bottle or cup",  "focuses on the face of the person in front of the child, lifts head, moro reflex, turns to sound, turns head to sound" 		]
	}
}, 
 {
	question_string: "Name the milestone at six months:",
	choices: {
	correct: "sits momentarily propped up on hands, sits without back support, transfers objects hand to hand, raking grasp, responds to name, babbles, has stranger anxiety",
		wrong: ["crawls, stands with furniture, finds hidden objects, responds to name", "sits/support, cooing, posterior fontanel is closed,  bats at objects", "recognizes parent, tracks eyes past midline, is alert to sound"]
	}
},	
{
	question_string: "Name the milestone at six months:",
	choices: {
	correct: "sits with little to no support, reaches with one hand, transfers object between hands, babbles, develops stranger anxiety, feeds self",
		wrong: [
			"sits with trunk support/back support, begins rolling, reaches midline, laughs, turns to voice, enjoys looking around", "lifts head-head comes up at 45 degrees,  smiles responsively, coos, tries to grasp for things", "babbles, claps/waves/peek-a-boo, crawls and creeps, sits up, cruises on furniture, says Mama/Dada, plays patty-cake, has a pincer grasp, pulls to stand, stands with support"]
}
},	{
	question_string: "Name the milestone at two months:",
	choices: {
		correct: "Lifts head while on belly, eye tracking past midline, alerts to voices and sounds, coos, has a social smile",
		wrong: ["recognizes parents, opens hands, grasps and shakes", "follows a light 180 degrees, bears weight, holds small toy, reaches for things, rolls(front to back),  turns to sound", "focuses on the face of the person in front of the child, lifts head, moro reflex, turns to sound, turns head to sound"]
	}
},

{
  question_string: "Select the milestone at two months:",
  choices: {
    correct: "lifts head-head comes up at 45 degrees, smiles responsively, coos, tries to grasp for things",
    wrong: ["follows a light 180 degrees, bears weight, holds small toy, reaches for things, rolls(front to back),  turns to sound", "sits/support, cooing, posterior fontanel is closed, bats at objects", "Focuses on the face of the person in front of the child, lifts head, moro reflex, turns to sound, turns head to sound"]
  }
}, {
	question_string: "Select the correct milestone for 12 months: ",
	choices: {
		correct: "stands alone and walks alone, fine pincer grasp,  knows one word other than \"Mama\", follows one-step commands points to get desired object.",
		wrong: ["sits momentarily propped up on hands, sits without back support, transfers objects hand to hand, raking grasp, responds to name, babbles, has stranger anxiety", "pulls to stand, cruises on furniture, 3-finger pincer grasp, holds bottle or cup", "throws a ball overhand, kicks a ball, copies drawing a line with a crayon, speaks in two-word combinations,  >50-word vocabulary, engages in parallel play, is able to remove an article of clothing"]
	}
},
{
	question_string: "Click the correct milestone for 12 months:",
	choices: {
		correct: "stands well unsupported, walks first steps independently, throws a ball, 2-finger pincer grasp, says first words, separation anxiety, comes when called",
		wrong: ["babbles, responds to name, rolls both ways, sits alone unsupported, transfers objects from one hand to another", "walks backwards, scribbles, removes garment--some put on clothing", "walks up/down stairs with both feet no each step, jumps with/on two feet, builds a tower of 6 cubes/blocks, copies a line, >50-word vocabulary, 2-word phrases, follows 2-step commands, parallel play, begins toilet training"]
	}
}, {
	question_string: "Name the correct milestone for 12 months:",
	choices: {
		correct: "Stands alone, some should be able to pull up to a standing position, bang 2 cubes held in hands imitates vocalizations and sounds, babbling, protodeclarative pointing (points to get desired object)",
		wrong: ["birth weight doubles, first teeth, holds bottle", "pulls to stand, develops an immature pincer grasp, bangs two objects together, says \"Mama\" and \"Dada\" indiscriminately, waves bye-bye, plays gesture games like patty-cake", "recognizes parent, tracks eyes past midline, is alert to sound"]
	}
}, {
	question_string: "Name the correct milestone for 12 months:",
	choices: {
		correct: "Fills/empties containers, imitates words, pincer grasp, (forefinger and thumb), turns pages, says 1-2 words, stands/walks alone",
		wrong: ["follows a light 180 degrees, bears weight, holds small toy, reaches for things, rolls(front to back), turns to sound", "sits momentarily propped up on hands, sits without back support, transfers objects hand to hand, raking grasp, responds to name, babbles, has stranger anxiety", "has two-word sentences, follows 2-step verbal command, acts worried if parent is sad, helps dress self, removes clothes, runs, throws overhand, holds cup in one hand, jumps with both feet, kicks a ball"]
	}
}, {
	question_string: "Identify the correct milestone for 12 months:",
	choices: {
		correct: "picking up objects with fingers, birth weight triples, pulls self up",
		wrong: ["walks alone, throws ball, feeds self", "runs, kicks a ball, builds a tower of 2-4 cubes, removes clothing, 10-25 words, identifies more than 1 body part, understands what belongs to them, begins pretend play", "sits with trunk support/back support, begins rolling, reaches midline, laughs, turns to voice, enjoys looking around"]
	}
}, 
	{
	question_string: "Identify the correct milestone for 15 months:",
	choices: {
		correct: "walks backwards, scribble, uses/vocalizes 1 word other than \"mama\"/\"dada\", drinks from a cup, wave bye-bye",
		wrong: ["runs well, builds a tower of 3 cubes, points to 1-3 body parts, 'helps' in the house", "throws a ball overhand, jumps on two feet, can copy a vertical line, makes a tower of 6/8 cubes, points to 6 body parts, washes and dries hands, puts on clothing", "runs, jumps, combines words meaningfully, climbs stairs, birth weight quadruples"] 
    } 
},
		{
	question_string: "Select the correct milestone for 15 months: ",
	choices: {
		correct: "Stoops and recovers, scribbles in imitation, uses 3-5 words, uses a spoon and a cup, turns pages in a book",
		wrong: ["runs/jumps, combines words meaningfully, climbs stairs, birth weight quadruples", "walks up/down stairs with alternating feet, rides tricycle, copies a circle, uses utensils, uses 3-word sentences, speech is 75% intelligible, knows age/gender, engages in imaginative play", "pulls to stand, cruises on furniture, 3-finger pincer grasp, holds bottle or cup"]
	}
}, {
	question_string: "Click the correct milestone for 15 months: ",
	choices: {
		correct: "Climbs furniture, dances, stacks 2 blocks on tower, stoops and recovers, uses a cup, uses a spoon, says 4 words",
		wrong: ["Sits with little to no support, reaches with one hand, transfers objects between hands, babbles, develops stranger anxiety, feeds self", "crawls, stands with furniture, finds hidden objects, responds to name", "stands alone and walks alone, fine pincer grasp, knows one words other than \"Mama\" and \"Dada\", follows one-step commands, points to get desired object"]
	}
}, {
	question_string: "Identify the correct milestone for 15 months: ",
	choices: {
		correct: "Walks alone, throws ball, feeds self",
		wrong: ["stands alone and walks alone, fine pincer grasp, knows one words other than \"Mama\" and \"Dada\", follows one-step commands, points to get desired object", "says 8 or more words, feeds self, imitates housework, names pictures, uses spoon/fork, walks backwards, walks up and down stairs", "turns doorknob, dresses self, copies a vertical line, balances on each foot for 1 second"]
	}
}, {
	question_string: "Identify the correct milestone for 6 months: ",
	choices: {
		correct: "babbles, responds to name, rolls both ways, sits alone unsupported, transfers objects from one hand to the other",
		wrong: ["crawls, stands with furniture, finds hidden objects, responds to name", "sits/support, cooing, posterior fontanel is closed, bats at objects", "Lifts head while on belly, eye tracking past midline, alerts to voices and sounds, coos, has a social smile"]
	}
}, {
	question_string: "Identify the correct milestone for 6 months: ",
	choices: {
		correct: "birth weight doubles, first teeth, holds bottle",
		wrong: ["recognizes parent, tracks eyes past midline, is alert to sound", "follows a light 180 degrees, bears weight, holds small toy, reaches for things, rolls(front to back), turns to sound", "pulls to stand, cruises on furniture, 3-finger pincer grasp, holds bottle or cup"]
	}
}, {
	question_string: "Name the correct milestone for 9 months: ",
	choices: {
		correct: "pulls to stand, cruises on furniture, 3-finger pincer grasp, holds bottle or cup",
		wrong: ["stands well unsupported, walks first steps independently, throws a ball, 2-finger pincer grasp, says first words, separation anxiety, comes when called", "lifts head-head comes up at 45 degrees, smiles responsively, coos, tries to grasp for things", "birth weight doubles, first teeth, holds bottle"]
	}
}, {
	question_string: "Name the correct milestone for 9 months: ",
	choices: {
		correct: "pulls to stand, develops an immature pincer grasp, bangs two objects together, says \"Mama\" and \"Dada\" indiscriminately, waves bye-bye, plays gesture games like patty-cake",
		wrong: ["stands alone, some should be able to pull up to a standing position, bang 2 cubes held in hands, imitates vocalizations and sounds, babbling, protodeclarative pointing (points to get desired object)", "birth weight doubles, holds bottle", "follows a light 180 degrees, bears weight, holds small toy, reaches for things, rolls(front to back), turns to sound"]
	}
}, {
	question_string: "Click the correct milestone for 9 months: ",
	choices: {
		correct: "crawls, stands with furniture, finds hidden objects, responds to name",
		wrong: ["picking up objects with fingers, birth weight triples, pulls self up", "runs well, builds a tower of three cubes, points to 1-3 body parts, \"helps\" in the house", "walks backwards, scribbles, vocalizes one word other than \"Mama\", drinks from a cup, waves bye-bye"]
	}
}, {
	question_string: "Name the correct milestone for 9 months: ",
	choices: {
		correct: "babbles, claps/waves, crawls/creeps, sits up, cruises on furniture, says \"Mama\"/\"Dada\" (nonspecifically), plays pat-a-cake, has a pincer grasp, pulls to stand, stands with support",
		wrong: ["walks backwards, scribbles, vocalizes one word other than \"Mama\" or \"Dada\", drinks from a cup, waves bye-bye", "fills/empties containers, imitates words, pincer grasp, turns pages, says 1-2 words, stands alone, walks alone", "sits with little to no support, reaches with one hand, transfers objects between hands, babbles, develops stranger anxiety, feeds self"]
	}
},  
	{
  question_string: "Identify the milestone at two months:",
  choices: {
    correct: "recognizes parent, tracks eyes past midline, is alert to sound",
    wrong: ["rolls front to back, grasps a rattle, laughs, is soothed by parents voice, orients head to the direction of a voice", "focuses on the face of the person in front of the child, lifts head, moro reflex, turns to sound, turns head to sound", "pulls to stand, cruises on furniture, 3-finger pincer grasp, holds bottle"]
  }
}, 
	{
  question_string: "Select the milestone at four months: ",
  choices: {
    correct: "sits with trunk support/back support, begins rolling, reaches midline, laughs,turns to voice, enjoys looking around",
    wrong: ["sits with little to no support, reaches with one hand, transfers object between hands, babbles, develops stranger anxiety, feeds self", "babbles, claps/waves/peek-a-boo, crawls and creeps, sits up, cruises on furniture, says \"Mama\"/\"Dada\", plays patty-cake, has a pincer grasp, pulls to stand, stands with support", "recognizes parent, tracks eyes past midline, is alert to sound"]
  }
},
 	{
		question_string: "Select the milestone for 18 months: ",
		choices: {
		correct: "runs, kicks a ball, builds a tower of 2-4 cubes, understands \"mine\", begins pretend play",
		wrong : ["babbles, claps/waves/peek-a-boo, crawls and creeps, sits up, cruises on furniture, says Mama/Dada, plays patty-cake, has a pincer grasp, pulls to stand, stands with support", "sits momentarily on hands, sits without back support, tranfers objects hand-to-hand, raking grasp, responds to name, babbles, has stranger anxiety", "walks up/down stairs with alternating feet, rides tricycle, copies a circle, uses utensils, uses 3-word sentences, speech is 75% intelligible, knows age/gender, engages in imaginative play"]
	}
	},
		{
		question_string: "Click the milestone for a child at 18 months: ",
		choices: {
		correct: "runs well, builds a tower of 3 cubes, points to 1-3 body parts, \"helps\" in the house",
		wrong : ["walks up/down stairs with alternating feet, rides tricycle, copies a circle, uses utensils, uses 3-word sentences, speech is 75% intelligible, knows age/gender, engages in imaginative play", "stands on one foot briefly, stacks 5-6 blocks, bowel/bladder control, jumps from 1 step", "fills/empties containers, imitates words, pincer grasp (forefinger & thumb), turns pages, says 1-2 words, stands alone, walks alone"]
	}
	},	
	{
		question_string: "Select the milestone for a child at 18 months",
		choices: {
		correct: "walks backwards, scribbles, removes garment (some put on clothing) ",
		wrong : ["picking up objects with fingers, birth weight triples, pulls self up", "walks backwards, scribbles, uses/vocalizes 1 word other than mama or dada, drinks from a cup, waves bye-bye", "rolls front to back, grasps a rattle, laughs, is soothed by parents voice, orients head to the direction of a voice"]
	}
	},
		{
		question_string: "Click the milestone for a child at 18 months",
		choices: {
		correct: "says 8 or more words, feeds self, imitates housework, names pictures, uses spoon/fork, walks backwards, walks up and down stairs",
		wrong : ["pedals a tricycle, copies a circle, 75% of speech is intelligible to a stranger, speaks in 3-word sentences, brushes teeth with help", "stands alone and walks alone, fine pincer grasp, knows one word other than \"mama\" and \"dada\" ", "sits momentarily propped up on hands, sits without back support, tranfers objects hand-to-hand, raking grasp, responds to name, babbles, has stranger anxiety"]
	}
	},
		{
		question_string: "Identify the milestone for a child at 18 months",
		choices: {
		correct: "jumps in place, anterior fontanel is closed, stacks 3-4 blocks, pulls/pushes toys",
		wrong : ["runs, jumps, combines words meaningfully, climbs stairs, birth weight quadruples", "picking up objects with fingers, birth weight triples, pulls self up", "babbles, claps/waves/peek-a-boo, crawls and creeps, sits up, cruises on furniture, says \"Mama\"/\"Dada\", plays patty-cake, has a pincer grasp, pulls to stand, stands with support"]
	}
	},
		{
		question_string: "Identify the correct milestone for a child at two years old: ",
		choices: {
		correct: "walks up/down stairs with both feet on each step, jumps with/on two feet, builds a tower of 6 play blocks, copies a line, >50-word vocabulary, 2-word phrases, follows 2-step commands, parallel play, begins toilet training",
		wrong : ["runs, kicks a ball, build a tower of 2-4 cubes, removes clothing, 10 to 25-word vocabulary, identifies >1 body parts, understands \"mine\", begins pretend play", "turns doorknob, dresses self, copies a vertical line, balances on each foot for 1 second", "walks alone, throws ball, feeds self, stacks 2 blocks"]
	}
	},	
	{
		question_string: "Select the correct milestone for a child at two years old:",
		choices: {
		correct: "throws a ball overhand, kicks a ball, copies drawing a line with a crayon, speaks in 2-word combinations, >50-word vocabulary, engages in parallel play, is able to remove an article of clothing",
		wrong : ["walks up/down stairs with alternating feet, rides tricycle, copies a circle, uses utensils, uses 3-word sentences, speech is 75% intelligible, knows age/gender, engages in imaginative play", "fills/empties containers, imitates words, pincer grasp (forefinger & thumb), turns pages, says 1-2 words, stands alone, walks alone", "babbles, claps/waves/peek-a-boo, crawls and creeps, sits up, cruises on furniture, says \"Mama\"/\"Dada\", plays patty-cake, has a pincer grasp, pulls to stand, stands with support"]
	}
	},
		{
		question_string: "Identify the correct milestone for a child at two years old:",
		choices: {
		correct: "has 2-word sentences, follows 2-step verbal commands, acts worried if parent is sad, helps dress self, removes clothes, runs, throws overhand, holds cup in one hand, jumps with both feet, kicks a ball",
		wrong : ["pulls to stand, cruises on furniture, 3-finger pincer grip, holds bottle or cup", "stands alone and walks alone, fine pincer grasp, knows one word other than \"mama\" and \"dada\", follows one step commands, points to get desired object", "sits momentarily propped up on hands, sits without back support, tranfers objects hand-to-hand, raking grasp, responds to name, babbles, has stranger anxiety"]
	}
	},									 {
		question_string: "Click the correct milestone for a child at two years old:",
		choices: {
		correct: "runs, jumps, combines words meaningfully, climbs stairs, birth weight quadruples",
		wrong : ["stands alone and walks alone, fine pincer grasp, knows one word other than \"mama\" and \"dada\", follows one-step commands, points to get desired object", "climbs furniture, dances, stacks two blocks on tower, scoops and recovers, uses a cup, uses a spoon, says 4 words", "pulls to stand, develops an immature pincer grasph, bangs two objects together,says \"mama\" and \"dada\", waves bye-bye, plays gesture games like \"pat-a-cake\" "]
	}
	},
		{
		question_string: "Identify the correct milestone for a child at 2.5 years old:",
		choices: {
		correct: "throws a ball overhand, jumps on two feet, can copy a vertical line, makes a tower of 6-8 cubes, points to 6 body parts, washes and dries hands, puts on clothing",
		wrong : ["says 8 or more words, feeds self, imitates housework, names pictures, uses spoon/fork, walks backwards, walks up and down stairs", "crawls, stands with furniture, finds hidden objects, responds to name", "runs well, builds a tower of 3 cubes, points to 1-3 body parts, \"helps\" in the house"]
	}
	},	
	{
		question_string: "Click the correct milestone for a child at 30 months old:",
		choices: {
		correct: "stands on one foot briefly, stacks 5-6 blocks, bowel/bladder control, jumps from one step",
		wrong : ["runs well, builds a tower of 3 cubes, points to 1-3 body parts, \"helps\" in the house", "runs, jumps, combines words meaningfully, climbs stairs, birth weight quadruples", "sits momentarily propped up on hands, sits without back support, tranfers objects hand-to-hand, raking grasp, responds to name, babbles, has stranger anxiety"]
	}
	},
		{
		question_string: "Identify the correct milestone for a child at 3 years old:",
		choices: {
		correct: "walks up/down stairs with alternating feet, rides tricycle, copies a circle, uses utensils, uses 3-word sentences, speech is 75% intelligible, knows age/gender, engages in imaginative play",
		wrong : ["pulls to stand, develops an immature pincer grasph, bangs two objects together,says \"mama\" and \"dada\", waves bye-bye, plays gesture games like \"pat-a-cake\" ", "walks backwards, scribbles, uses/vocalizes 1 word other than mama or dada, drinks from a cup, waves bye-bye", "runs well, builds a tower of 3 cubes, points to 1-3 body parts, \"helps\" in the house"]
	}
	},
		{
		question_string: "Identify the correct milestone for a child at 3 years old:",
		choices: {
		correct: "pedals a tricycle, copies a circle, 75% of speech is intelligible, speaks in 3-word sentences, brushes teeth with help",
		wrong : ["climbs furniture, dances, stacks two blocks on tower, scoops and recovers, uses a cup, uses a spoon, says 4 words", "picking up objects with fingers, birth weight triples, pulls self up", "balances and hops on 1 foot, copies a square, identifies colors, speech is 100% intelligible, engages in cooperative play"]
	}
	},
		{
		question_string: "Select the correct milestone for a child at 3 years old:",
		choices: {
		correct: "balances on each foot for 1 second, throws a ball overhand, copies a vertical line, makes a tower of 6-8 cubes, names 1 color, knows the name of a friend, brushes teeth with help",
		wrong : ["balances and hops on 1 foot, copies a square, identifies colors, speech is 100% intelligible, engages in cooperative play", "balances and hops on 1 foot, copies a square, identifies colors, speech is 100% intelligible, engages in cooperative play", "throws a ball overhand, kicks a ball, copies drawing a line with a crayon, speaks in 2-word combinations, >50-word vocabulary, engages in parallel play, is able to remove an article of clothing"]
	}
	},	
	{
		question_string: "Select the correct milestone for a child at 3 years old:",
		choices: {
		correct: "asks \"what\" and \"why\", copies a circle and an X, counts to 3, knows age/name/gender, recognizes 3 colors, toilet-trained, walks up stairs alternating feet, pedals a tricycle",
		wrong : ["walks up/down stairs with both feet on each step, jumps on two feet, builds a tower of 6 play blocks, copies a line, >50-word vocabulary, 2-word phrases, follows 2-step commands, parallel play, begins toilet training", "balances on each foot for 2 seconds, makes a tower of 8 cubes, draws a person with at least 3 body parts, names 4 colors, speech is 100% intelligible to a stranger, copies a cross and circle, uses scissors, tells stories, sings a song or poem from memory", "picking up objects with fingers, birth weight triples, pulls self up"]
	}
	},
		{
		question_string: "Identify the correct milestone for a child at 3 years old:",
		choices: {
		correct: "turns doorknob, dresses self, copies a vertical line, balances on each foot for  1 second",
		wrong : ["balances on each foot for 2 seconds, makes a tower of 8 cubes, draws a person with at least 3 body parts, names 4 colors, speech is 100% intelligible to a stranger, copies a cross and circle, uses scissors, tells stories, sings a song or poem from memory", "stands alone and walks alone, fine pincer grasp, knows one word other than \"mama\" and \"dada\", follows one-step commands, points to get desired object", "runs well, builds a tower of 3 cubes, points to 1-3 body parts, \"helps\" in the house"]
	}
	},
		{
		question_string: "Select the correct milestone for a child at 4 years old:",
		choices: {
		correct: "balances and hops on 1 foot, copies a square, identifies colors, speech is 100% intelligible, engages in cooperative play",
		wrong : ["runs/kicks a ball, builds a tower of 2-4 cubes, removes clothing, has 10-25 words, identifies >1 body part, understands \"mine\", begins pretend play", "turns doorknob, dresses self, copies a vertical line, balances on each foot for  1 second", "stands well unsupported, walks first steps independently, throws a ball, 2-finger pincer grasp, says first words, separation anxiety, comes when called"]
	}
	}, 
		{
		question_string: "Click the correct milestone for a child at 4 years old:",
		choices: {
		correct: "hops, copies a square or cross, 100% of speech is intelligible to a stranger, plays cooperatively with a group of other children, knows 4 colors",
		wrong : ["babbles, claps/waves/peek-a-boo, crawls and creeps, sits up, cruises on furniture, says \"Mama\"/\"Dada\", plays patty-cake, has a pincer grasp, pulls to stand, stands with support", "pedals a tricycle, copies a circle, 75% of speech is intelligible, speaks in 3-word sentences, brushes teeth with help", "stands alone and walks alone, fine pincer grasp, knows one word other than \"mama\" and \"dada\", follows one-step commands, points to get desired object"]
	}
	},	
	{
		question_string: "Click the correct milestone for a child at 4 years old:",
		choices: {
		correct: "balances on each foot for 2 seconds, makes a tower of 8 cubes, draws a person with at least 3 body parts, names 4 colors, speech is 100% intelligible to a stranger, copies a cross and circle, uses scissors, tells stories, sings a song or poem from memory",
		wrong : ["walks up/down stairs with alternating feet, rides tricycle, copies a circle, uses utensils, uses 3-word sentences, speech is 75% intelligible, knows age/gender, engages in imaginative play", "stands well unsupported, walks first steps independently, throws a ball, 2-finger pincer grasp, says first words, separation anxiety, comes when called", "jumps in place, anterior fontanel is closed, stacks 3-4 blocks, pulls/pushes toys"]
	}
	},
		{
		question_string: "Select the correct milestone for a child at 4 years old:",
		choices: {
		correct: "enjoys jokes, catches a ball, draws people, walks on tiptoes, pedals a tricycle, names 4-5 colors, uses 4-5 words in sentences, jumps alternating feet, hops on one foot",
		wrong : ["skips, copies a triangle, defines simple words, uses 5-word sentences, dresses self", "crawls, stands with furniture, finds hidden objects, responds to name", "throws a ball overhand, jumps on two feet, can copy a vertical line, makes a tower of 6-8 cubes, points to 6 body parts, washes and dries hands, puts on clothing"]
	}
	},
										 	{
		question_string: "Select the correct milestone for a child at 5 years old:",
		choices: {
		correct: "skips, walks backwards, copies a triangle, ties shoelaces, dresses/bathes independently, counts to 10, uses 5-word sentences, has friends, completes toilet training",
		wrong : ["throws a ball overhand, jumps on two feet, can copy a vertical line, makes a tower of 6-8 cubes, points to 6 body parts, washes and dries hands, puts on clothing", "runs, jumps, combines words meaningfully, climbs stairs, birth weight quadruples", "balances on each foot for 1 second, throws a ball overhand, copies a vertical line, makes a tower of 6-8 cubes, names 1 color, knows the name of a friend, brushes teeth with help"]
	}
	},
		{
		question_string: "Click the correct milestone for a child at 5 years old:",
		choices: {
		correct: "counts to 10, knows address/phone number, knows command \"on\" and \"off\"  and the \"over\" and \"under\" commands, engages in pretend play, prints name, rides bike with training wheels, skips, speaks understandably, tells imaginary stories", 
		wrong : ["has 2-word sentences, follows 2-step verbal commands, knows when parent is sad, helps dress self, removes clothes, runs, throws overhand, holds cup in one hand, jumps with both feet, kicks a ball", "enjoys jokes, catches a ball, draws people, walks on tiptoes, pedals a tricycle, names 4-5 colors, uses 4-5 words in sentences, jumps alternating feet, hops on one foot", "runs well, builds a tower of 3 cubes, points to 1-3 body parts, \"helps\" in the house"]
	}
	},	
	{
		question_string: "Identify the correct milestone for a child at 5 years old:",
		choices: {
		correct: "skips, copies a triangle, defines simple words, uses 5-word sentences, dresses self",
		wrong : ["says 8 or more words, feeds self, imitates housework, names pictures, uses spoon/fork, walks backwards, walks up/down stairs", "turns doorknob, dresses self, copies a vertical line, balances on each foot for 1 second", "balances and hops on 1 foot, copies a square, identifies colors, speech is 100% intelligible, engages in cooperative play"]
	}
	}
	 ];

// An object for a Quiz, which will contain Question objects.
var Quiz = function(quiz_name) {
  // Private fields for an instance of a Quiz object.
  this.quiz_name = quiz_name;
  
  // This one will contain an array of Question objects in the order that the questions will be presented.
  this.questions = [];
}

// A function that you can enact on an instance of a quiz object. This function is called add_question() and takes in a Question object which it will add to the questions field.
Quiz.prototype.add_question = function(question) {
  // Randomly choose where to add question
  var index_to_add_question = Math.floor(Math.random() * this.questions.length);
  this.questions.splice(index_to_add_question, 0, question);
	
}

// A function that you can enact on an instance of a quiz object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the quiz in.
Quiz.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Hide the quiz results modal
  $('#quiz-results').hide();
  
  // Write the name of the quiz
  $('#quiz-name').text(this.quiz_name);
  
  // Create a container for questions
  var question_container = $('<div>').attr('id', 'question').insertAfter('#quiz-name');
  
  // Helper function for changing the question and updating the buttons
  function change_question() {
    self.questions[current_question_index].render(question_container);
    $('#prev-question-button').prop('disabled', current_question_index === 0);
    $('#next-question-button').prop('disabled', current_question_index === self.questions.length - 1);
    //determine if the user chose the correct answer.
		if(self.questions[i].correct){};
    // Determine if all questions have been answered
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  }
	
  // Render the first question
  var current_question_index = 0;
  change_question();
  
  // Add listener for the previous question button
  $('#prev-question-button').click(function() {
    if (current_question_index > 0) {
      current_question_index--;
      change_question();
    }
  });
  
  // Add listener for the next question button
  $('#next-question-button').click(function() {
    if (current_question_index < self.questions.length - 1) {
      current_question_index++;
      change_question();
    }
  });
  
  // Add listener for the submit answers button
  $('#submit-button').click(function() {
    //Determine how many questions the user got right
  var score = 0;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
        score++;
     }
   }
    
     //Display the score with the appropriate message
    var percentage = score / self.questions.length;
   console.log(percentage);
  var message = "Great job, thanks for playing!";
   if (percentage === 1) {
     message = 'Great job!'
    } else if (percentage >= .75) {
      message = 'You did alright.'
   } else if (percentage >= .5) {
      message = 'Better luck next time.'
    } else {
      message = 'Thanks for playing!.'
   }
   $('#quiz-results-message').text(message);
   $('#quiz-results-score').html('You got <b>' + score + '/' + self.questions.length + '</b> questions correct.');
   $('#quiz-results').slideDown();
   $('#quiz button').slideUp();
 });
  //Add a listner on the questions container for the user to click their answer. If they select the wrong one, the right one is highlighted.
	question_container.bind('user-select-change',
													function(){
		if(self.questions[i].user_choice_index === self.questions[i].correct_choice_index){
			document.getElementById('#question').style.color = question[correct] != question [wrong] ?"green":"red"; 
		}
		else{
			document.getElementById('#question').style.background = "red";
		}
	}
	);
  // Add a listener on the questions container to listen for user select changes. This is for determining whether we can submit answers or not.
  question_container.bind('user-select-change', function() {
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  });
}

// An object for a Question, which contains the question, the correct choice, and wrong choices. This block is the constructor.
var Question = function(question_string, correct_choice, wrong_choices) {
  // Private fields for an instance of a Question object.
  this.question_string = question_string;
  this.choices = [];
  this.user_choice_index = null; // Index of the user's choice selection
  
  // Random assign the correct choice an index
  this.correct_choice_index = Math.floor(Math.random() * wrong_choices.length + 1);
  
  // Fill in this.choices with the choices
  var number_of_choices = wrong_choices.length + 1;
  for (var i = 0; i < number_of_choices; i++) {
    if (i === this.correct_choice_index) {
      this.choices[i] = correct_choice;
    } else {
      // Randomly pick a wrong choice to put in this index
      var wrong_choice_index = Math.floor(Math.random(0, wrong_choices.length));
      this.choices[i] = wrong_choices[wrong_choice_index];
      
      // Remove the wrong choice from the wrong choice array so that we don't pick it again
      wrong_choices.splice(wrong_choice_index, 1);
    }
  }
}

// A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
Question.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Fill out the question label
  var question_string_h2;
  if (container.children('h2').length === 0) {
    question_string_h2 = $('<h2>').appendTo(container);
  } else {
    question_string_h2 = container.children('h2').first();
  }
  question_string_h2.text(this.question_string);
  
  // Clear any radio buttons and create new ones
  if (container.children('input[type=radio]').length > 0) {
    container.children('input[type=radio]').each(function() {
      var radio_button_id = $(this).attr('id');
      $(this).remove();
      container.children('label[for=' + radio_button_id + ']').remove();
    });
  }
  for (var i = 0; i < this.choices.length; i++) {
    // Create the radio button
    var choice_radio_button = $('<input>')
      .attr('id', 'choices-' + i)
      .attr('type', 'radio')
      .attr('name', 'choices')
      .attr('value', 'choices-' + i)
      .attr('checked', i === this.user_choice_index)
      .appendTo(container);
    
    // Create the label
    var choice_label = $('<label>')
      .text(this.choices[i])
      .attr('for', 'choices-' + i)
      .appendTo(container);
  }
  
  // Add a listener for the radio button to change which one the user has clicked on
  $('input[name=choices]').change(function(index) {
    var selected_radio_button_value = $('input[name=choices]:checked').val();
    
    // Change the user choice index
    self.user_choice_index = parseInt(selected_radio_button_value.substr(selected_radio_button_value.length - 1, 1));
    
    // Trigger a user-select-change
    container.trigger('user-select-change');
  });
}

// "Main method" which will create all the objects and render the Quiz.
$(document).ready(function() {
  // Create an instance of the Quiz object
  var quiz = new Quiz('Milestones Quiz-- Guess The Age: ');
  
  // Create Question objects from all_questions and add them to the Quiz object
  for (var i = 0; i < all_questions.length; i++) {
    // Create a new Question object
    var question = new Question(all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong);
    
    // Add the question to the instance of the Quiz object that we created previously
    quiz.add_question(question);
  }
  
  // Render the quiz
  var quiz_container = $('#quiz');
  quiz.render(quiz_container);
});