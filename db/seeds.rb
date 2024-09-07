gyms = [
  {
    name: "Shakty Rock Gym",
    address: "175 R. St Viateur Est, Montréal, QC H2T 1B4",
    latitude: 45.527040,
    longitude: -73.598110,
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {
    name: "Allez Up - Mile End",
    address: "5600 Av. de Gaspé, Montréal, QC H2T 2A7",
    latitude: 45.527930,
    longitude: -73.598370,
    rating: 3,
    description: ''
  },
  {
    name: "Allez Up - Pointe St-Charles",
    address: "1555 Rue Saint-Patrick, Montréal, QC H3K 2B7",
    latitude: 45.487620,
    longitude: -73.560550,
    rating: 4,
    description: ''
  },
  {
    name: "Bloc Shop - Chabanel",
    address: "1370 Rue Chabanel O, Montréal, QC H4N 1H4",
    latitude: 45.532280,
    longitude: -73.657520,
    rating: 4,
    description: ''
  },
  {
    name: "Bloc Shop - Mile-Ex",
    address: "6595 A Rue Saint-Urbain, Montréal, QC H2S 3G6",
    latitude: 45.530320,
    longitude: -73.612000,
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Backbone",
    address: "100 Rue du Rubis, Bromont, QC J2L 0G2",
    latitude: 45.525808,
    longitude: -73.587844,
    rating: 4,
    description: ''
  },
  {
    name: "Mouv'",
    address: "3811 Rue Everett, Montréal, QC H2A 1S8",
    latitude: 45.5653628,
    longitude: -73.5962019,
    rating: 3,
    description: ''
  }
]

gyms.each do |gym|
  g = Gym.new(
    name: gym[:name],
    address: gym[:address],
    latitude: gym[:latitude],
    longitude: gym[:longitude],
    rating: gym[:rating],
    description: gym[:description]
  )
  g.save
  puts "#{g.name} gym created!"
end
