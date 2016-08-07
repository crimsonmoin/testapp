$(document).on("pageshow","#diet",function(){
	$("#sel").change(function(){
		var val="";
		switch(parseInt($(this).val())){
			case 1:val="Nutritional Deficiency:<br/>Vitamin A,Vitamin E<br/><br/> " +
					"Dietary Sources:<br/> Vitamin A:<br/>Liver ,carrots, dairy " +
					"foods, sweet potato, pumpkin, mangoes, spinach, Papaya, " +
					"beet root, fish oil <br/>Vitamin E:<br/>Corn, Butter, Brown Rice, " +
					"Soybean Oil, Vegetable oils such as Corn, Cottonseed or " +
					"Soybean, Nuts, Wheat, All kind of berries, sprouts, fish oil";
			break;
			case 2:val="Nutritional Deficiency:<br/>Vitamin A<br/><br/> " +
					"Dietary Sources:<br/> Liver ,carrots, dairy " +
					"foods, sweet potato, pumpkin, mangoes, spinach," +
					" Papaya, beet root, fish oil";
			break;
			case 3:val="Nutritional Deficiency:<br/>Vitamin A,Vitamin E,Minerals<br/><br/> " +
					"Dietary Sources:<br/> Vitamin A:<br/>" +
					"Liver ,carrots, dairy foods, sweet " +
					"potato, pumpkin, mangoes, spinach, Papaya, " +
					"beet root, fish oil <br/>Vitamin B:<br/>Sunflower " +
					"Seeds, Pork, whole and enriched Grains, " +
					"dried Beans, kelp, dates, garlic, parsley, " +
					"watercress, wheatgrass<br/>Minerals:<br/>Fruits( banana, pomegranate) " +
					"and green leafy vegetables";
			break;
			case 4:val="Nutritional Deficiency:<br/>Vitamin A, Vitamin C<br/><br/> " +
					"Dietary Sources:<br/> Vitamin A:<br/>Liver" +
					" ,carrots, dairy foods, sweet potato, pumpkin," +
					" mangoes, spinach, Papaya, beet root, fish oil<br/>" +
					"Vitamin C:<br/>Citrus Fruits, Strawberries, Broccoli, " +
					"Green Peppers, Orange, Meat";
			break;
			case 5: 
			val="Nutritional Deficiency:<br/>Vitamin A<br/><br/> " +
					"Dietary Sources:<br/> Liver ,carrots, dairy foods, " +
					"sweet potato, pumpkin, mangoes, " +
					"spinach, Papaya, beet root, fish oil";
			break;
		case 6: 
			val="Nutritional Deficiency:<br/>Vitamin A,Vitamin D<br/><br/> " +
					"Dietary Sources:<br/> Vitamin A :<br/>" +
					"Liver ,carrots, dairy foods, sweet potato," +
					" pumpkin, mangoes, spinach, Papaya, beet root, " +
					"fish oil<br/>Vitamin D:<br/>Egg Yolk, Milk, Exposure " +
					"to sun enables body to make its own Vitamin D, " +
					"Cod liver Oil, seeds, lemongrass, sprouts, avocado, " +
					"garlic, greens leafyVegetables(spinach),fish oil";
			break;
		case 7: 
			val="Nutritional Deficiency:<br/>Vitamin C,Vitamin D<br/><br/> " +
					"Dietary Sources:<br/> Vitamin C:<br/>" +
					"Citrus Fruits, Strawberries, Broccoli," +
					" Green Peppers, Orange, Meat<br/>Vitamin D:" +
					"<br/>Egg Yolk, Milk, Exposure to sun enables body" +
					" to make its own Vitamin D, Cod liver Oil, seeds, " +
					"lemongrass, sprouts, avocado, garlic, greens " +
					"leafyVegetables(spinach),fish oil";
			break;
		case 8: 
			val="Nutritional Deficiency:<br/>Vitamin B<br/><br/> " +
					"Dietary Sources:<br/> Sunflower Seeds, Pork, whole " +
					"and enriched " +
					"Grains, dried Beans, kelp, dates, garlic, parsley, " +
					"watercress, wheatgrass";
			break;
		case 9: 
			val="Nutritional Deficiency:<br/>Vitamin B,Calcium<br/><br/> " +
					"Dietary Sources:<br/> Vitamin B:<br/>Sunflower Seeds, Pork, whole " +
					"and enriched " +
					"Grains, dried Beans, kelp, dates, garlic, parsley, " +
					"watercress, wheatgrass<br/>Calcium:<br/>Milk, " +
					"yoghurt, cheese, almonds, " +
					"cereals, all milk products";
			break;
		case 10: 
			val="Nutritional Deficiency:<br/>Vitamin B<br/><br/> " +
					"Dietary Sources:<br/> Sunflower Seeds, Pork, whole " +
					"and enriched " +
					"Grains, dried Beans, kelp, dates, garlic, parsley, " +
					"watercress, wheatgrass";
			break;
		case 11: 
			val="Nutritional Deficiency:<br/>Vitamin C, Iron<br/><br/> " +
					"Dietary Sources:<br/> Vitamin C:<br/>" +
					"Citrus Fruits, Strawberries, Broccoli, " +
					"Green Peppers, Orange, Meat<br/>Iron:<br/>Green " +
					"Leafy vegetables, Liver,  Meats, Kidney beans, " +
					"enriched Bread, Raisins., sprouts, almonds, apricot," +
					" beets, cherries, dates, figs, grains, lentils , parsley, " +
					"pistachio nuts, seeds, walnut, red meat, fish";
			break;
		case 12: 
			val="Nutritional Deficiency:<br/>Vitamin C<br/><br/> " +
					"Dietary Sources:<br/> Citrus Fruits, Strawberries, Broccoli," +
					" Green Peppers, Orange, Meat";
			break;
		case 13: 
			val="Nutritional Deficiency:<br/>Vitamin D<br/><br/> " +
					"Dietary Sources:<br/> Egg Yolk, Milk, Exposure to sun en" +
					"ables body to make its own Vitamin D, Cod liver Oil, seeds, " +
					"lemongrass, sprouts, avocado, garlic, greens leafyVegetables(spinach),fish oil";
			break;
		case 14: 
			val="Nutritional Deficiency:<br/>Vitamin D<br/><br/> " +
					"Dietary Sources:<br/> Egg Yolk, Milk, Exposure to sun en" +
					"ables body to make its own Vitamin D, Cod liver Oil, seeds, " +
					"lemongrass, sprouts, avocado, garlic, greens leafyVegetables(spinach),fish oil";
			break;
		case 15: 
			val="Nutritional Deficiency:<br/>Vitamin E<br/><br/> " +
					"Dietary Sources:<br/> Corn, Butter, Brown Rice, " +
					"Soybean Oil, Vegetable oils such as Corn, Cottonseed " +
					"or Soybean, Nuts, Wheat, All kind of berries, sprouts, fish oil";
			break;
		case 16: 
			val="Nutritional Deficiency:<br/>Vitamin E<br/><br/> " +
					"Dietary Sources:<br/> Corn, Butter, Brown Rice, " +
					"Soybean Oil, Vegetable oils such as Corn, Cottonseed " +
					"or Soybean, Nuts, Wheat, All kind of berries, sprouts, fish oil";
			break;
		case 17: 
			val="Nutritional Deficiency:<br/>Vitamin E<br/><br/> " +
					"Dietary Sources:<br/> Corn, Butter, Brown Rice, " +
					"Soybean Oil, Vegetable oils such as Corn, Cottonseed " +
					"or Soybean, Nuts, Wheat, All kind of berries, sprouts, fish oil";
			break;
		case 18: 
			val="Nutritional Deficiency:<br/>Vitamin E<br/><br/> " +
					"Dietary Sources:<br/> Corn, Butter, Brown Rice, " +
					"Soybean Oil, Vegetable oils such as Corn, Cottonseed " +
					"or Soybean, Nuts, Wheat, All kind of berries, sprouts, fish oil";
			break;
		case 19: 
			val="Nutritional Deficiency:<br/>Calcium<br/><br/> " +
					"Dietary Sources:<br/> Milk, yoghurt, cheese, almonds, cereals, all milk products";
			break;
		case 20: 
			val="Nutritional Deficiency:<br/>Calcium<br/><br/> " +
					"Dietary Sources:<br/> Milk, yoghurt, cheese, almonds, cereals, all milk products";
			break;
		case 21: 
			val="Nutritional Deficiency:<br/>Calcium<br/><br/> " +
					"Dietary Sources:<br/> Milk, yoghurt, cheese, almonds, cereals, all milk products";
			break;
		case 22: 
			val="Nutritional Deficiency:<br/>Iron<br/><br/> " +
					"Dietary Sources:<br/> Green Leafy vegetables,Liver,  " +
					"Meats, Kidney beans, enriched Bread, Raisins., sprouts, " +
					"almonds, apricot, , beets, cherries, dates, figs, grains, " +
					"lentils , parsley, pistachio nuts, seeds, walnut, red meat, fish";
			break;
		case 23: 
			val="Nutritional Deficiency:<br/>Iron<br/><br/> " +
					"Dietary Sources:<br/> Green Leafy vegetables,Liver,  " +
					"Meats, Kidney beans, enriched Bread, Raisins., sprouts, " +
					"almonds, apricot, , beets, cherries, dates, figs, grains, " +
					"lentils , parsley, pistachio nuts, seeds, walnut, red meat, fish";
			break;
		case 24: 
			val="Nutritional Deficiency:<br/>Iron<br/><br/> " +
					"Dietary Sources:<br/> Green Leafy vegetables,Liver,  " +
					"Meats, Kidney beans, enriched Bread, Raisins., sprouts, " +
					"almonds, apricot, , beets, cherries, dates, figs, grains, " +
					"lentils , parsley, pistachio nuts, seeds, walnut, red meat, fish";
			break;
		case 25: 
			val="Nutritional Deficiency:<br/>Iron<br/><br/> " +
					"Dietary Sources:<br/> Green Leafy vegetables,Liver,  " +
					"Meats, Kidney beans, enriched Bread, Raisins., sprouts, " +
					"almonds, apricot, , beets, cherries, dates, figs, grains, " +
					"lentils , parsley, pistachio nuts, seeds, walnut, red meat, fish";
			break;
		case 26: 
			val="Nutritional Deficiency:<br/>Iron<br/><br/> " +
					"Dietary Sources:<br/> Green Leafy vegetables,Liver,  " +
					"Meats, Kidney beans, enriched Bread, Raisins., sprouts, " +
					"almonds, apricot, , beets, cherries, dates, figs, grains, " +
					"lentils , parsley, pistachio nuts, seeds, walnut, red meat, fish";
			break;
		case 27: 
			val="Nutritional Deficiency:<br/>Iron<br/><br/> " +
					"Dietary Sources:<br/> Green Leafy vegetables,Liver,  " +
					"Meats, Kidney beans, enriched Bread, Raisins., sprouts, " +
					"almonds, apricot, , beets, cherries, dates, figs, grains, " +
					"lentils , parsley, pistachio nuts, seeds, walnut, red meat, fish";
			break;
		case 28: 
			val="Nutritional Deficiency:<br/>Protein<br/><br/> " +
					"Dietary Sources:<br/> Nuts, Beans, Peanuts, Lentils, Whole grains, Spinach, seeds, soy, Peas";
			break;
		case 29: 
			val="Nutritional Deficiency:<br/>Protein<br/><br/> " +
					"Dietary Sources:<br/> Nuts, Beans, Peanuts, Lentils, Whole grains, Spinach, seeds, soy, Peas";
			break;
		case 30: 
			val="Nutritional Deficiency:<br/>Protein<br/><br/> " +
					"Dietary Sources:<br/> Nuts, Beans, Peanuts, Lentils, Whole grains, Spinach, seeds, soy, Peas";
			break;
		case 31: 
			val="Nutritional Deficiency:<br/>Protein<br/><br/> " +
					"Dietary Sources:<br/> Nuts, Beans, Peanuts, Lentils, Whole grains, Spinach, seeds, soy, Peas";
			break;
		case 32: 
			val="Nutritional Deficiency:<br/>Minerals<br/><br/> " +
					"Dietary Sources:<br/> Fruits( banana, pomegranate) and green leafy vegetables";
			break;
		case 33: 
			val="Nutritional Deficiency:<br/>Minerals<br/><br/> " +
					"Dietary Sources:<br/> Fruits( banana, pomegranate) and green leafy vegetables";
			break;
		default:
			break;
		}
		$(".con").html(val);
	});
		
});
$(document).on("pageshow","#ortho",function(){
	$("#sel1").change(function(){
		var val="";
		switch(parseInt($(this).val())){
			case 1:val="<h1>Age group:<h1><br>" +
					"<p>Below 12 years</p><br>" +
					"<h1>Why Attention Required:</h1><br>" +
					"<p>In this age, child grows rapidly and hence " +
					"his bone mass increases significantly. Thus, " +
					"bones need extra strength in this cohort.</p><br>" +
					"<h1>Recommendations:</h1><br>" +
					"<p>Intake of Calcium and vitamin D.</p><br>" +
					"<h3>Sources:</h3><br>" +
					"Egg Yolk, Milk, Exposure to sun enables " +
					"body to make its own Vitamin D, Cod liver Oil, " +
					"seeds, lemongrass, sprouts, avocado, garlic, " +
					"Milk, yoghurt, cheese, almonds, cereals, all milk " +
					"products, green leafy vegetables (spinach),fish oil.";
			break;
			case 2:val="<h1>Age group:<h1><br>" +
					"<p>Between 12 to 18 Years.</p><br>" +
					"<h1>Why Attention Required:</h1><br>" +
					"<p>In this age, child attains puberty which " +
					"has a key role in the development of skeleton." +
					"During puberty onset, child loses body calcium. " +
					"Thus, he/she needs special diet to overcome this problem.</p><br>" +
					"<h1>Recommendations:</h1><br>" +
					"<p>Intake of Calcium and vitamin D.</p><br>" +
					"<h3>Exercises:</h3><br>" +
					"<p>Weight bearing exercise like walking and " +
					"running, as well as team sports like soccer " +
					"and basketball.</p><br>" +
					"<h3>Sources:</h3><br>" +
					"Egg Yolk, Milk, Exposure to sun enables " +
					"body to make its own Vitamin D, Cod liver Oil, " +
					"seeds, lemongrass, sprouts, avocado, garlic, " +
					"Milk, yoghurt, cheese, almonds, cereals, all milk " +
					"products, green leafy vegetables (spinach),fish oil.";
			break;
			case 3:val="<h1>Age group:<h1><br>" +
					"<p>Between 19 to 30 Years.</p><br>" +
					"<h1>Why Attention Required:</h1><br>" +
					"<p>In this age, it is essential to maintain the bone health." +
					" Though there is no new bone formation, it is difficult to" +
					" maintain the bone mass already formed till now.  Thus, it requires " +
					"some exercises along with the nutritional diet.</p><br>" +
					"<h1>Recommendations:</h1><br>" +
					"<p>Opt for supplements of calcium and vitamin D with healthy diet.</p><br>" +
					"<h3>Exercises:</h3><br>" +
					"<p>At least 30 minutes of weight bearing activity (brisk walk), Muscle " +
					"strengthening push-ups, sit-ups, lunges, squats, lifting weights etc.</p>";
			break;
			case 4:val="<h1>Age group:<h1><br>" +
					"<p>Between 31 to 51 Years.</p><br>" +
					"<h1>Why Attention Required:</h1><br>" +
					"<p>In this age, bone mass is gradually reduced, for which " +
					"exercises and essential nutrients are must to preserve the " +
					"bone health.</p><br>" +
					"<h1>Recommendations:</h1><br>" +
					"<p>Opt for supplements of calcium and " +
					"vitamin D with healthy diet.</p><br>" +
					"<h3>Exercises:</h3><br>" +
					"<p>At least 30 minute walk and 15 min jogging.</p><br>" +
					"<h3>Sources:</h3><br>" +
					"Egg Yolk, Milk, Exposure to sun enables " +
					"body to make its own Vitamin D, Cod liver Oil, " +
					"seeds, lemongrass, sprouts, avocado, garlic, " +
					"Milk, yoghurt, cheese, almonds, cereals, all milk " +
					"products, green leafy vegetables (spinach),fish oil.";
			break;
			case 5:val="<h1>Age group:<h1><br>" +
					"<p>Above 50 years</p><br>" +
					"<h1>Why Attention Required:</h1><br>" +
					"<p>In this age, people get some endocrinal disorders. " +
					"Therefore, body loses calcium rapidly, Thus, person needs " +
					"some calcium supplements along with the regular diet and " +
					"do some light exercises.</p><br>" +
					"<h1>Recommendations:</h1><br>" +
					"<p>Opt for supplements of calcium and vitamin D with healthy diet.</p><br>"+
					"<h3>Exercises:</h3><br>" +
					"<p>15 min walk with yoga and meditation.</p><br>" +
					"<h3>Sources:</h3><br>" +
					"Egg Yolk, Milk, Exposure to sun enables " +
					"body to make its own Vitamin D, Cod liver Oil, " +
					"seeds, lemongrass, sprouts, avocado, garlic, " +
					"Milk, yoghurt, cheese, almonds, cereals, all milk " +
					"products, green leafy vegetables (spinach),fish oil.";
			break;
			default:
		}
		$(".con1").html(val);
	});
});