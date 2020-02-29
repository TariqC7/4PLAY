// Skip


var view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 168, height: 13)

view.backgroundColor = .white


view.textColor = UIColor(red: 0.608, green: 0.318, blue: 0.878, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 24)


// Line height: 28 pt


view.textAlignment = .center

view.text = "Skip"


var parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 168).isActive = true

view.heightAnchor.constraint(equalToConstant: 13).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 239).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 29).isActive = true




// Select how you would like to import your records


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 289, height: 38)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 24)

view.numberOfLines = 0

view.lineBreakMode = .byWordWrapping


// Line height: 28 pt


view.textAlignment = .center

view.text = "Select how you would like to import your records"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 289).isActive = true

view.heightAnchor.constraint(equalToConstant: 38).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 43).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 406).isActive = true




// Ellipse 3


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 18, height: 18)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.769, green: 0.769, blue: 0.769, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 18).isActive = true

view.heightAnchor.constraint(equalToConstant: 18).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 147).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 728).isActive = true




// Ellipse 5


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 18, height: 18)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.784, green: 0.769, blue: 0.769, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 18).isActive = true

view.heightAnchor.constraint(equalToConstant: 18).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 211).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 728).isActive = true




// Ellipse 4


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 18, height: 18)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.769, green: 0.769, blue: 0.769, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 18).isActive = true

view.heightAnchor.constraint(equalToConstant: 18).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 179).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 728).isActive = true




// Ellipse 6


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 18, height: 18)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.608, green: 0.318, blue: 0.878, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 18).isActive = true

view.heightAnchor.constraint(equalToConstant: 18).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 239).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 728).isActive = true




// Rectangle 18


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 318, height: 74)

view.backgroundColor = .white


var shadows = UIView()

shadows.frame = view.frame

shadows.clipsToBounds = false

view.addSubview(shadows)


let shadowPath0 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 10)

let layer0 = CALayer()

layer0.shadowPath = shadowPath0.cgPath

layer0.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer0.shadowOpacity = 1

layer0.shadowRadius = 4

layer0.shadowOffset = CGSize(width: 0, height: 4)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)


var shapes = UIView()

shapes.frame = view.frame

shapes.clipsToBounds = true

view.addSubview(shapes)


let layer1 = CALayer()

layer1.backgroundColor = UIColor(red: 0.898, green: 0.898, blue: 0.898, alpha: 1).cgColor

layer1.bounds = shapes.bounds

layer1.position = shapes.center

shapes.layer.addSublayer(layer1)


shapes.layer.cornerRadius = 10


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 318).isActive = true

view.heightAnchor.constraint(equalToConstant: 74).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 29).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 501).isActive = true




// Rectangle 19


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 318, height: 74)

view.backgroundColor = .white


shadows = UIView()

shadows.frame = view.frame

shadows.clipsToBounds = false

view.addSubview(shadows)


let shadowPath0 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 10)

let layer0 = CALayer()

layer0.shadowPath = shadowPath0.cgPath

layer0.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer0.shadowOpacity = 1

layer0.shadowRadius = 4

layer0.shadowOffset = CGSize(width: 0, height: 4)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)


shapes = UIView()

shapes.frame = view.frame

shapes.clipsToBounds = true

view.addSubview(shapes)


let layer1 = CALayer()

layer1.backgroundColor = UIColor(red: 0.898, green: 0.898, blue: 0.898, alpha: 1).cgColor

layer1.bounds = shapes.bounds

layer1.position = shapes.center

shapes.layer.addSublayer(layer1)


shapes.layer.cornerRadius = 10


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 318).isActive = true

view.heightAnchor.constraint(equalToConstant: 74).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 29).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 604).isActive = true




// Import from Patient Portal


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 214, height: 21)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 18)


// Line height: 21 pt

// (identical to box height)


view.textAlignment = .center

view.text = "Import from Patient Portal"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 214).isActive = true

view.heightAnchor.constraint(equalToConstant: 21).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 81).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 517).isActive = true




// Contact Healthcare Provider


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 229, height: 21)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 18)


// Line height: 21 pt

// (identical to box height)


view.textAlignment = .center

view.text = "Contact Healthcare Provider"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 229).isActive = true

view.heightAnchor.constraint(equalToConstant: 21).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 73).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 630).isActive = true




// Using account credentials


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 162, height: 16)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 14)


// Line height: 16 pt


view.textAlignment = .center

view.text = "Using account credentials"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 162).isActive = true

view.heightAnchor.constraint(equalToConstant: 16).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 107).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 551).isActive = true




// clipboard 1


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 200, height: 200)

view.backgroundColor = .white


let image0 = UIImage(named: "clipboard.png")?.cgImage

let layer0 = CALayer()

layer0.contents = image0

layer0.bounds = view.bounds

layer0.position = view.center

view.layer.addSublayer(layer0)



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 200).isActive = true

view.heightAnchor.constraint(equalToConstant: 200).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 88).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 140).isActive = true


