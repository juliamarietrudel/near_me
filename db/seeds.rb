gyms = [
  {
    name: "Shakty Rock Gym",
    address: "175 R. St Viateur Est, Montréal, QC H2T 1B4",
    latitude: 45.527040,
    longitude: -73.598110,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {
    name: "Allez Up - Mile End",
    address: "5600 Av. de Gaspé, Montréal, QC H2T 2A7",
    latitude: 45.527930,
    longitude: -73.598370,
    description: ''
  },
  {
    name: "Allez Up - Pointe St-Charles",
    address: "1555 Rue Saint-Patrick, Montréal, QC H3K 2B7",
    latitude: 45.487620,
    longitude: -73.560550,
    description: ''
  },
  {
    name: "Bloc Shop - Chabanel",
    address: "1370 Rue Chabanel O, Montréal, QC H4N 1H4",
    latitude: 45.532280,
    longitude: -73.657520,
    description: ''
  },
  {
    name: "Bloc Shop - Mile-Ex",
    address: "6595 A Rue Saint-Urbain, Montréal, QC H2S 3G6",
    latitude: 45.530320,
    longitude: -73.612000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Backbone",
    address: "100 Rue du Rubis, Bromont, QC J2L 0G2",
    latitude: 45.525808,
    longitude: -73.587844,
    description: ''
  },
  {
    name: "Mouv'",
    address: "3811 Rue Everett, Montréal, QC H2A 1S8",
    latitude: 45.5653628,
    longitude: -73.5962019,
    description: ''
  },
  {
    name: "Shakty Rock Gym",
    address: "175 R. St Viateur Est, Montréal, QC H2T 1B4",
    latitude: 45.527040,
    longitude: -73.598110,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {
    name: "Allez Up - Mile End",
    address: "5600 Av. de Gaspé, Montréal, QC H2T 2A7",
    latitude: 45.527930,
    longitude: -73.598370,
    description: ''
  },
  {
    name: "Allez Up - Pointe St-Charles",
    address: "1555 Rue Saint-Patrick, Montréal, QC H3K 2B7",
    latitude: 45.487620,
    longitude: -73.560550,
    description: ''
  },
  {
    name: "Bloc Shop - Chabanel",
    address: "1370 Rue Chabanel O, Montréal, QC H4N 1H4",
    latitude: 45.532280,
    longitude: -73.657520,
    description: ''
  },
  {
    name: "Bloc Shop - Mile-Ex",
    address: "6595 A Rue Saint-Urbain, Montréal, QC H2S 3G6",
    latitude: 45.530320,
    longitude: -73.612000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Backbone",
    address: "100 Rue du Rubis, Bromont, QC J2L 0G2",
    latitude: 45.525808,
    longitude: -73.587844,
    description: ''
  },
  {
    name: "Mouv'",
    address: "3811 Rue Everett, Montréal, QC H2A 1S8",
    latitude: 45.5653628,
    longitude: -73.5962019,
    description: ''
  }
]

review_contents = [
  "Great gym! The staff is super friendly and the routes are challenging.",
  "Awesome atmosphere and a wide variety of climbing styles. Highly recommend!",
  "The facilities are clean and well-maintained. Love coming here!",
  "Perfect for beginners and experts alike. They offer great classes too.",
  "The bouldering section is top-notch. Always excited to tackle new problems.",
  "A bit crowded during peak hours, but otherwise a fantastic climbing experience.",
  "The views from the top ropes are amazing. Can't beat climbing with a city panorama!",
  "They change up the routes regularly, which keeps things interesting.",
  "The gear rental is reasonably priced and in good condition.",
  "I've improved so much since I started climbing here. The community is very supportive."
]

gyms.each do |gym_data|
  g = Gym.create!(
    name: gym_data[:name],
    address: gym_data[:address],
    latitude: gym_data[:latitude],
    longitude: gym_data[:longitude],
    description: gym_data[:description]
  )
  puts "#{g.name} gym created!"

  # num_reviews = rand(3..5)
  7.times do
    r = Review.new(
      content: review_contents.sample,
      rating: rand(1..5)
    )
    r.gym = g  # This line explicitly associates the review with the gym
    r.save!
  end
end

puts "Seed data creation completed!"
