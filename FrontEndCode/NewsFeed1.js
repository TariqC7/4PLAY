// Rectangle 12


var view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 85)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.258, green: 0.258, blue: 0.258, alpha: 1).cgColor


var parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 85).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 725).isActive = true




// home indicator/dark


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 21)

view.backgroundColor = .white



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.heightAnchor.constraint(equalToConstant: 21).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.trailingAnchor.constraint(equalTo: parent.trailingAnchor, constant: 0).isActive = true

view.bottomAnchor.constraint(equalTo: parent.bottomAnchor, constant: 0).isActive = true




// Rectangle 3


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 79)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.608, green: 0.318, blue: 0.878, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 0).isActive = true




// Button


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 303, height: 43)

view.backgroundColor = .white


var shadows = UIView()

shadows.frame = view.frame

shadows.clipsToBounds = false

view.addSubview(shadows)


let shadowPath0 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 0)

let layer0 = CALayer()

layer0.shadowPath = shadowPath0.cgPath

layer0.shadowColor = UIColor(red: 0.525, green: 0.427, blue: 0.788, alpha: 0.16).cgColor

layer0.shadowOpacity = 1

layer0.shadowRadius = 60

layer0.shadowOffset = CGSize(width: 0, height: 16)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)


view.layer.backgroundColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 303).isActive = true

view.heightAnchor.constraint(equalToConstant: 43).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 36).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 737).isActive = true




// 4playwhite 1


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 175, height: 175)

view.backgroundColor = .white



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 175).isActive = true

view.heightAnchor.constraint(equalToConstant: 175).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 100).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: -48).isActive = true




// Rectangle 19


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 343, height: 139)

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

layer0.shadowOffset = CGSize(width: 0, height: 0)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)


let shadowPath1 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 10)

let layer1 = CALayer()

layer1.shadowPath = shadowPath1.cgPath

layer1.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer1.shadowOpacity = 1

layer1.shadowRadius = 4

layer1.shadowOffset = CGSize(width: 0, height: 0)

layer1.bounds = shadows.bounds

layer1.position = shadows.center

shadows.layer.addSublayer(layer1)


var shapes = UIView()

shapes.frame = view.frame

shapes.clipsToBounds = true

view.addSubview(shapes)


let layer2 = CALayer()

layer2.backgroundColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1).cgColor

layer2.bounds = shapes.bounds

layer2.position = shapes.center

shapes.layer.addSublayer(layer2)


shapes.layer.cornerRadius = 10


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 343).isActive = true

view.heightAnchor.constraint(equalToConstant: 139).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 17).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 102).isActive = true




// How To Use A Condom


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 206, height: 26)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 18)


// Line height: 21 pt


view.textAlignment = .center

view.text = "How To Use A Condom\n"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 206).isActive = true

view.heightAnchor.constraint(equalToConstant: 26).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 130).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 108).isActive = true




// It’s National Condom Week, a chance to remember the importance of condoms for... Read more >>


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 254, height: 68)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 16)

view.numberOfLines = 0

view.lineBreakMode = .byWordWrapping


// Line height: 19 pt


view.text = "It’s National Condom Week, a chance to remember the importance of condoms for...\nRead more >>"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 254).isActive = true

view.heightAnchor.constraint(equalToConstant: 68).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 140).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 133).isActive = true




// Posted Feb 29, 2020


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 186, height: 13)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 14)


// Line height: 16 pt


view.textAlignment = .center

view.text = "Posted Feb 29, 2020"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 186).isActive = true

view.heightAnchor.constraint(equalToConstant: 13).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 110).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 218).isActive = true




// Rectangle 22


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 343, height: 139)

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

layer0.shadowOffset = CGSize(width: 0, height: 0)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)


let shadowPath1 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 10)

let layer1 = CALayer()

layer1.shadowPath = shadowPath1.cgPath

layer1.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer1.shadowOpacity = 1

layer1.shadowRadius = 4

layer1.shadowOffset = CGSize(width: 0, height: 0)

layer1.bounds = shadows.bounds

layer1.position = shadows.center

shadows.layer.addSublayer(layer1)


shapes = UIView()

shapes.frame = view.frame

shapes.clipsToBounds = true

view.addSubview(shapes)


let layer2 = CALayer()

layer2.backgroundColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1).cgColor

layer2.bounds = shapes.bounds

layer2.position = shapes.center

shapes.layer.addSublayer(layer2)


shapes.layer.cornerRadius = 10


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 343).isActive = true

view.heightAnchor.constraint(equalToConstant: 139).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 20).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 558).isActive = true




// In part 2 of our How to Love series, Catie & Eileen dicuss having a sense of ownership in relationships... Listen here >>


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 217, height: 72)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 16)

view.numberOfLines = 0

view.lineBreakMode = .byWordWrapping


// Line height: 19 pt


view.text = "In part 2 of our How to Love series, Catie & Eileen dicuss having a sense of ownership in relationships...\nListen here >>"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 217).isActive = true

view.heightAnchor.constraint(equalToConstant: 72).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 143).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 589).isActive = true




// Posted Feb 25, 2020


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 186, height: 13)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 14)


// Line height: 16 pt


view.textAlignment = .center

view.text = "Posted Feb 25, 2020"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 186).isActive = true

view.heightAnchor.constraint(equalToConstant: 13).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 114).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 681).isActive = true




// Rectangle 20


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 343, height: 139)

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

layer0.shadowOffset = CGSize(width: 0, height: 0)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)


let shadowPath1 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 10)

let layer1 = CALayer()

layer1.shadowPath = shadowPath1.cgPath

layer1.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer1.shadowOpacity = 1

layer1.shadowRadius = 4

layer1.shadowOffset = CGSize(width: 0, height: 0)

layer1.bounds = shadows.bounds

layer1.position = shadows.center

shadows.layer.addSublayer(layer1)


shapes = UIView()

shapes.frame = view.frame

shapes.clipsToBounds = true

view.addSubview(shapes)


let layer2 = CALayer()

layer2.backgroundColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1).cgColor

layer2.bounds = shapes.bounds

layer2.position = shapes.center

shapes.layer.addSublayer(layer2)


shapes.layer.cornerRadius = 10


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 343).isActive = true

view.heightAnchor.constraint(equalToConstant: 139).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 17).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 254).isActive = true




// February is Teen Dating Violence Awareness Month! This effort raises awareness... Read more >>


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 224, height: 74)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 16)

view.numberOfLines = 0

view.lineBreakMode = .byWordWrapping


// Line height: 19 pt


view.text = "February is Teen Dating Violence Awareness Month! This effort raises awareness...\nRead more >>"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 224).isActive = true

view.heightAnchor.constraint(equalToConstant: 74).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 138).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 302).isActive = true




// Posted Feb 25, 2020


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 186, height: 13)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 14)


// Line height: 16 pt


view.textAlignment = .center

view.text = "Posted Feb 25, 2020"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 186).isActive = true

view.heightAnchor.constraint(equalToConstant: 13).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 109).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 376).isActive = true




// Rectangle 21


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 343, height: 139)

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

layer0.shadowOffset = CGSize(width: 0, height: 0)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)


let shadowPath1 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 10)

let layer1 = CALayer()

layer1.shadowPath = shadowPath1.cgPath

layer1.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer1.shadowOpacity = 1

layer1.shadowRadius = 4

layer1.shadowOffset = CGSize(width: 0, height: 0)

layer1.bounds = shadows.bounds

layer1.position = shadows.center

shadows.layer.addSublayer(layer1)


shapes = UIView()

shapes.frame = view.frame

shapes.clipsToBounds = true

view.addSubview(shapes)


let layer2 = CALayer()

layer2.backgroundColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1).cgColor

layer2.bounds = shapes.bounds

layer2.position = shapes.center

shapes.layer.addSublayer(layer2)


shapes.layer.cornerRadius = 10


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 343).isActive = true

view.heightAnchor.constraint(equalToConstant: 139).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 17).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 406).isActive = true




// Did you know that about half of sexually active teens and young adults will get an... Read more >>


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 220, height: 62)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 16)

view.numberOfLines = 0

view.lineBreakMode = .byWordWrapping


// Line height: 19 pt


view.text = "Did you know that about half of sexually active teens and young adults will get an...\nRead more >>"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 220).isActive = true

view.heightAnchor.constraint(equalToConstant: 62).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 140).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 455).isActive = true




// Posted Feb 25, 2020


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 186, height: 13)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 14)


// Line height: 16 pt


view.textAlignment = .center

view.text = "Posted Feb 25, 2020"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 186).isActive = true

view.heightAnchor.constraint(equalToConstant: 13).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 111).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 529).isActive = true




// Teen Dating Violence-- What You Can Do


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 206, height: 26)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 18)

view.numberOfLines = 0

view.lineBreakMode = .byWordWrapping


// Line height: 21 pt


view.text = "Teen Dating Violence-- What You Can Do"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 206).isActive = true

view.heightAnchor.constraint(equalToConstant: 26).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 136).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 256).isActive = true




// STDs - Sexually Transmitted Diseases


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 206, height: 26)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 18)

view.numberOfLines = 0

view.lineBreakMode = .byWordWrapping


// Line height: 21 pt


view.text = "STDs - Sexually Transmitted Diseases"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 206).isActive = true

view.heightAnchor.constraint(equalToConstant: 26).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 139).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 411).isActive = true




// How to Love pt. 2


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 206, height: 26)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 18)


// Line height: 21 pt


view.textAlignment = .center

view.text = "How to Love pt. 2 "


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 206).isActive = true

view.heightAnchor.constraint(equalToConstant: 26).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 111).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 566).isActive = true

