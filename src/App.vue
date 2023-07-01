<template>
<div class="px-5 md:px-[10%] lg:px-[20%] xl:px-[22%]">
  <h1 class="text-[24px] md:text-[48px] my-2 mt-8 font-bold play">Classic Cheesecake Recipe</h1>
  <div class="flex">
    <p>
      <svg class="mr-1 mt-1" width="20" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4" />
        <circle cx="1.5" cy="6.5" r="1.5" fill="#C4C4C4" />
        <circle cx="6.5" cy="1.5" r="1.5" fill="#C4C4C4" />
        <circle cx="6.5" cy="6.5" r="1.5" fill="#C4C4C4" />
        <circle cx="11.5" cy="1.5" r="1.5" fill="#C4C4C4" />
        <circle cx="11.5" cy="6.5" r="1.5" fill="#C4C4C4" />
      </svg>
    </p>
    <p class="text-[12px] md:text-[14px] mont italic">
      Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.
    </p>
  </div>
  <div>
    <img :src="'photo1.png'" alt="" class="my-10 ">

    <div class="flex flex-col md:flex-row ">
      <div class="order-2 md:order-1 md:w-11/12 pr-10 mont">
        <div class="mt-8">
          <h1 class="font-bold text-[18px] md:text-[24px] play">Ingredients</h1>
          <h2 class="my-6 text-[16px] play italic font-[400]">Graham Cracker Crust</h2>
          <div>
            <div class="flex my-4 text-[14px] md:text-[16px]">
              <div>
                <div class="w-[20px] h-[20px] border-[1px] rounded-sm border-[#828282] mr-3"></div>
              </div>
              <div class="mt-[-1.5px]">
                1 and 1/2 cudivs (150g) <b class="text-[#333]">graham cracker crumbs</b> (about 10 full sheet graham crackers)
              </div>
            </div>
            <div class="flex my-4 text-[14px] md:text-[16px]">
              <div>
                <div class="w-[20px] h-[20px] border-[1px] rounded-sm border-[#828282] mr-3"></div>
              </div>
              <div class="mt-[-1.5px]">
                5 Tablespoons (70g) <b class="text-[#333]">unsalted butter</b>, melted
              </div>
            </div>
            <div class="flex my-4 text-[14px] md:text-[16px]">
              <div>
                <div class="w-[20px] h-[20px] border-R[1px] rounded-sm border-[#828282] mr-3"></div>
              </div>
              <div class="mt-[-1.5px]">
                1/4 cup (50g) <b class="text-[#333]">granulated sugar</b>
              </div>
            </div>

          </div>
          <h2 class="my-10 font-medium play italic">Cheesecake</h2>
          <div>
            <div class="flex my-4 text-[14px] md:text-[16px]">
              <div>
                <div class="w-[20px] h-[20px] border-[1px] rounded-sm border-[#828282] mr-3"></div>
              </div>
              <div class="mt-[-1.5px]">
                four 8-ounce blocks (904g) full-fat <b class="text-[#333]">cream cheese</b>, softened to room temperature
              </div>
            </div>
            <div class="flex my-4 text-[14px] md:text-[16px]">
              <div>
                <div class="w-[20px] h-[20px] border-[1px] rounded-sm border-[#828282] mr-3"></div>
              </div>
              <div class="mt-[-1.5px]">
                1 cup (200g) <b class="text-[#333]">granulated sugar</b>
              </div>
            </div>
            <div class="flex my-4 text-[14px] md:text-[16px]">
              <div>
                <div class="w-[20px] h-[20px] border-[1px] rounded-sm border-[#828282] mr-3"></div>
              </div>
              <div class="mt-[-1.5px]">
                1 cup (240g) full-fat <b class="text-[#333]">sour cream</b>, at room temperature
              </div>
            </div>
            <div class="flex my-4 text-[14px] md:text-[16px]">
              <div>
                <div class="w-[20px] h-[20px] border-[1px] rounded-sm border-[#828282] mr-3"></div>
              </div>
              <div class="mt-[-1.5px]">
                1 teaspoon <b class="text-[#333]">pure vanilla extract</b>
              </div>
            </div>
            <div class="flex my-4 text-[14px] md:text-[16px]">
              <div>
                <div class="w-[20px] h-[20px] border-[1px] rounded-sm border-[#828282] mr-3"></div>
              </div>
              <div class="mt-[-1.5px]">
                2 teaspoons <b class="text-[#333]">fresh lemon juice</b> (optional, but recommended)
              </div>
            </div>
            <div class="flex my-4 text-[14px] md:text-[16px]">
              <div>
                <div class="w-[20px] h-[20px] border-[1px] rounded-sm border-[#828282] mr-3"></div>
              </div>
              <div class="mt-[-1.5px]">
                3 large <b class="text-[#333]">eggs</b>, at room temperature
              </div>
            </div>
            <div class="flex my-4 text-[14px] md:text-[16px]">
              <div>
                <div class="w-[20px] h-[20px] border-[1px] rounded-sm border-[#828282] mr-3"></div>
              </div>
              <div class="mt-[-1.5px] ">
                <p class="inline">topping suggestions: </p>
                <p class="inline italic font-medium">salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</p>
                <span> (recipe in notes)</span>
              </div>
            </div>

          </div>
        </div>
        <div class="mt-2">
          <h1 class="text-[24px] play font-bold my-10">Instructions</h1>
          <div class="mont font-normal">
            <div class="flex my-8 text-[16px] ">
              <div>
                <div class="w-[36px] h-[36px]  rounded-sm bg-[#F2994A] text-white text-lg font-bold mr-3 flex justify-center items-center">1</div>
              </div>
              <div class="mt-[-1.5px]">
                Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).
              </div>
            </div>
            <div class="flex my-8 text-[16px] ">
              <div>
                <div class="w-[36px] h-[36px]  rounded-sm bg-[#F2994A] text-white text-lg font-bold mr-3 flex justify-center items-center">2</div>
              </div>
              <div class="mt-[-1.5px]">
                <b class="text-[#333]">Make the crust:</b> Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.
              </div>
            </div>
            <div class="flex my-8 text-[16px] ">
              <div>
                <div class="w-[36px] h-[36px]  rounded-sm bg-[#F2994A] text-white text-lg font-bold mr-3 flex justify-center items-center">3</div>
              </div>
              <div class="mt-[-1.5px]">
                <b class="text-[#333]">Make the filling:</b> Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.
              </div>
            </div>
            <div class="flex my-8 text-[16px] ">
              <div>
                <div class="w-[36px] h-[36px]  rounded-sm bg-[#F2994A] text-white text-lg font-bold mr-3 flex justify-center items-center">4</div>
              </div>
              <div class="mt-[-1.5px]">
                <b class="text-[#333]">Prepare the simple water bath (see note)d</b> Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)
              </div>
            </div>
            <div class="flex my-8 text-[16px] ">
              <div>
                <div class="w-[36px] h-[36px]  rounded-sm bg-[#F2994A] text-white text-lg font-bold mr-3 flex justify-center items-center">5</div>
              </div>
              <div class="mt-[-1.5px]">
                Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.
              </div>
            </div>
            <div class="flex my-8 text-[16px] ">
              <div>
                <div class="w-[36px] h-[36px]  rounded-sm bg-[#F2994A] text-white text-lg font-bold mr-3 flex justify-center items-center">6</div>
              </div>
              <div class="mt-[-1.5px]">
                Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.
              </div>
            </div>
            <div class="flex my-8 text-[16px] ">
              <div>
                <div class="w-[36px] h-[36px]  rounded-sm bg-[#F2994A] text-white text-lg font-bold mr-3 flex justify-center items-center">7</div>
              </div>
              <div class="mt-[-1.5px]">
                Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="order-1 md:order-2 md:w-1/2 md:flex md:justify-end">
        <div>
          <div class=" px-10 py-16 rounded-lg md:shadow-custom">
            <div class="mb-5 md:mb-8 mont ">
              <div class="flex items-center">
                <div>
                  <svg class="w-[17px] md:w-[30px] md:mr-3 mr-2 " fill="#f2994a" viewBox="0 -3.84 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="enable-background:new 0 0 122.88 115.21" xml:space="preserve" stroke="#f2994a">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div>
                  <p class="text-[10px] mont font-bold text-[#BDBDBD]">YIELDS</p>
                  <p class="text-[12px] mont md:text-[14px] font-medium text-[#f2994a]">12 Servings</p>
                </div>
              </div>
            </div>
            <div class="flex md:block  justify-between">
              <div class="flex items-center md:mb-8">
                <div>
                  <svg class="w-[17px] md:w-[30px] md:mr-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12 8V12L15 15" stroke="#4f4f4f" stroke-width="2" stroke-linecap="round"></path>
                      <circle cx="12" cy="12" r="9" stroke="#4f4f4f" stroke-width="2"></circle>
                    </g>
                  </svg>
                </div>
                <div>
                  <p class="text-[10px] mont font-bold text-[#BDBDBD]">PREP TIME</p>
                  <p class="text-[12px] mont md:text-[14px] font-medium">45 minutes</p>
                </div>
              </div>
              <div class="flex items-center md:mb-8">
                <div>
                  <svg class="w-[17px] md:w-[30px] md:mr-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12 8V12L15 15" stroke="#4f4f4f" stroke-width="2" stroke-linecap="round"></path>
                      <circle cx="12" cy="12" r="9" stroke="#4f4f4f" stroke-width="2"></circle>
                    </g>
                  </svg>
                </div>
                <div>
                  <p class="text-[10px] mont font-bold text-[#BDBDBD]">COOK TIME</p>
                  <p class="text-[12px] mont md:text-[14px] font-medium">1 hour</p>
                </div>
              </div>
              <div class="flex items-center ">
                <div>
                  <svg class="w-[17px] md:w-[30px] md:mr-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12 8V12L15 15" stroke="#4f4f4f" stroke-width="2" stroke-linecap="round"></path>
                      <circle cx="12" cy="12" r="9" stroke="#4f4f4f" stroke-width="2"></circle>
                    </g>
                  </svg>
                </div>
                <div>
                  <p class="text-[10px] mont font-bold text-[#BDBDBD]">TOTAL TIME</p>
                  <p class="text-[12px] mont md:text-[14px] font-medium">7,75 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<p class="text-center my-3 mt-10 mont text-[14px] text-[#828282]">created by <a href="https://muhammadfauzan.netlify.app/" class="underline font-bold">Fauzan</a> - devChallenges.io</p>
</template>

<style>
.mont {
  font-family: 'Montserrat', sans-serif;
}

.play {
  font-family: 'Playfair Display', serif;
}

.box-shadow {
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
}
</style>
