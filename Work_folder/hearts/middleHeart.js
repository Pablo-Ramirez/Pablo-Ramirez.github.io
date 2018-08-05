class Hearts{
  constructor(){
    this.width = 20;
    this.height = 20;
    background('#969696');
    noStroke();
    //Grey Squares for hearts
    fill('#4c4648');
    //left part of the Heart
    rect(100, 100, this.width, this.height);
    rect(100, 120, this.width, this.height);
		rect(100, 140, this.width, this.height);
		rect(120, 160, this.width, this.height);
		rect(140, 180, this.width, this.height);
		rect(160, 200, this.width, this.height);
		rect(180, 220, this.width, this.height)
		//right part of the Heart
		rect(200,200, this.width, this.height);
		rect(220,180, this.width, this.height);
		rect(240,160, this.width, this.height);
		rect(260,140, this.width, this.height);
		rect(260,120, this.width, this.height);
		rect(260,100, this.width, this.height);
		//top part of the Heart
		rect(120,80, this.width, this.height);
		rect(140,80, this.width, this.height);
		rect(160,80, this.width, this.height);
		rect(180, 100, this.width, this.height);
		rect(200, 80, this.width, this.height);
		rect(220, 80, this.width, this.height);
		rect(240, 80, this.width, this.height);
		//inside of LeftHeart
		//left inside of heart
		fill('#ee1c25')
		rect(120, 100, this.width, this.height);
		rect(140, 100, this.width, this.height);
		//diffrent color heart
		fill('#c62132')
		rect(160, 100, this.width, this.height);
		fill('#ee1c25')
		rect(120, 120, this.width, this.height);
		rect(140, 120, this.width, this.height);
		rect(160, 120, this.width, this.height);
		rect(120, 140, this.width, this.height);
		rect(140, 140, this.width, this.height);
		rect(160, 140, this.width, this.height);
		rect(140, 160, this.width, this.height);
		rect(160, 160, this.width, this.height);
		rect(160, 180, this.width, this.height);
		//dividing the heart
		rect(180, 120, this.width, this.height);
		rect(180, 140, this.width, this.height);
		rect(180, 160, this.width, this.height);
		rect(180, 180, this.width, this.height);
		rect(180, 200, this.width, this.height);
		//right inside of heart
		rect(200, 100, this.width, this.height);
		rect(200, 120, this.width, this.height);
		rect(200, 140, this.width, this.height);
		rect(200, 160, this.width, this.height);
		//diffrent color heart
		fill('#c62132')
		rect(200, 180, this.width, this.height);
		fill('#ee1c25')
		rect(220, 100, this.width, this.height);
		rect(220, 120, this.width, this.height);
		rect(220, 140, this.width, this.height);
		//diffrent color heart
		fill('#c62132')
		rect(220, 160, this.width, this.height);
		fill('#ee1c25')
		rect(240, 100, this.width, this.height);
		rect(240, 120, this.width, this.height);
		//diffrent color heart
		fill('#c62132')
		rect(240, 140, this.width, this.height);


		//bottom part of the heart
		//left bottom of heart
		fill('Black')
		rect(100, 160, this.width, this.height);
		rect(100, 180, this.width, this.height);

		rect(120, 180, this.width, this.height);
		rect(120, 200, this.width, this.height);

		rect(140, 200, this.width, this.height);
		rect(140, 220, this.width, this.height);

		rect(160, 220, this.width, this.height);
		rect(160, 240, this.width, this.height);

		rect(180, 240, this.width, this.height);
		rect(180, 260, this.width, this.height);

		//right bottom of hearts
		rect(200, 240, this.width, this.height);
		rect(200, 220, this.width, this.height);

		rect(220, 220, this.width, this.height);
		rect(220, 200, this.width, this.height);

		rect(240, 200, this.width, this.height);
		rect(240, 180, this.width, this.height);

		rect(260, 180, this.width, this.height);
		rect(260, 160, this.width, this.height);
  }
}
