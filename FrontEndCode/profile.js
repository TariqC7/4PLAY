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




// Rectangle 13


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 296)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.608, green: 0.318, blue: 0.878, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 296).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: -1).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 0).isActive = true




// 24 / basic / more-horizontal


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 24, height: 24)

view.backgroundColor = .white



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false




// 24 / notifications / bell


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 30, height: 30)

view.backgroundColor = .white



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false




// Rectangle 3


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 130, height: 130)

view.backgroundColor = .white


let image0 = UIImage(named: "classic.png")?.cgImage

let layer0 = CALayer()

layer0.contents = image0

layer0.bounds = view.bounds

layer0.position = view.center

view.layer.addSublayer(layer0)



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 130).isActive = true

view.heightAnchor.constraint(equalToConstant: 130).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 123).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 69).isActive = true




// Tariq Cranston


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 294, height: 35)

view.backgroundColor = .white


view.textColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 28)


// Line height: 33 pt


view.textAlignment = .center

view.text = "Tariq Cranston"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 294).isActive = true

view.heightAnchor.constraint(equalToConstant: 35).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 41).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 216).isActive = true




// Rectangle 4


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 352, height: 79)

view.backgroundColor = .white


shadows = UIView()

shadows.frame = view.frame

shadows.clipsToBounds = false

view.addSubview(shadows)


let shadowPath0 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 8)

let layer0 = CALayer()

layer0.shadowPath = shadowPath0.cgPath

layer0.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer0.shadowOpacity = 1

layer0.shadowRadius = 4

layer0.shadowOffset = CGSize(width: 0, height: 0)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)


let shadowPath1 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 8)

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


shapes.layer.cornerRadius = 8


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 352).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 11).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 326).isActive = true




// 24 / arrows / arrow-right


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 24, height: 24)

view.backgroundColor = .white


shadows = UIView()

shadows.frame = view.frame

shadows.clipsToBounds = false

view.addSubview(shadows)


let shadowPath0 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 0)

let layer0 = CALayer()

layer0.shadowPath = shadowPath0.cgPath

layer0.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer0.shadowOpacity = 1

layer0.shadowRadius = 4

layer0.shadowOffset = CGSize(width: 0, height: 4)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false




// View your information


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 210, height: 38)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 21)


// Line height: 25 pt


view.textAlignment = .center

view.text = "View your information"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 210).isActive = true

view.heightAnchor.constraint(equalToConstant: 38).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 24).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 351).isActive = true




// Rectangle 14


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 352, height: 79)

view.backgroundColor = .white


shadows = UIView()

shadows.frame = view.frame

shadows.clipsToBounds = false

view.addSubview(shadows)


let shadowPath0 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 8)

let layer0 = CALayer()

layer0.shadowPath = shadowPath0.cgPath

layer0.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer0.shadowOpacity = 1

layer0.shadowRadius = 4

layer0.shadowOffset = CGSize(width: 0, height: 0)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)


let shadowPath1 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 8)

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


shapes.layer.cornerRadius = 8


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 352).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 11).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 423).isActive = true




// 24 / arrows / arrow-right


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 24, height: 24)

view.backgroundColor = .white


shadows = UIView()

shadows.frame = view.frame

shadows.clipsToBounds = false

view.addSubview(shadows)


let shadowPath0 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 0)

let layer0 = CALayer()

layer0.shadowPath = shadowPath0.cgPath

layer0.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer0.shadowOpacity = 1

layer0.shadowRadius = 4

layer0.shadowOffset = CGSize(width: 0, height: 4)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false




// Feedback


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 210, height: 38)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 21)


// Line height: 25 pt


view.textAlignment = .center

view.text = "Feedback"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 210).isActive = true

view.heightAnchor.constraint(equalToConstant: 38).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 24).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 448).isActive = true




// Rectangle 15


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 352, height: 79)

view.backgroundColor = .white


shadows = UIView()

shadows.frame = view.frame

shadows.clipsToBounds = false

view.addSubview(shadows)


let shadowPath0 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 8)

let layer0 = CALayer()

layer0.shadowPath = shadowPath0.cgPath

layer0.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer0.shadowOpacity = 1

layer0.shadowRadius = 4

layer0.shadowOffset = CGSize(width: 0, height: 0)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)


let shadowPath1 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 8)

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


shapes.layer.cornerRadius = 8


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 352).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 11).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 520).isActive = true




// 24 / arrows / arrow-right


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 24, height: 24)

view.backgroundColor = .white


shadows = UIView()

shadows.frame = view.frame

shadows.clipsToBounds = false

view.addSubview(shadows)


let shadowPath0 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 0)

let layer0 = CALayer()

layer0.shadowPath = shadowPath0.cgPath

layer0.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer0.shadowOpacity = 1

layer0.shadowRadius = 4

layer0.shadowOffset = CGSize(width: 0, height: 4)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false




// Privacy Policy


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 210, height: 38)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 21)


// Line height: 25 pt


view.textAlignment = .center

view.text = "Privacy Policy"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 210).isActive = true

view.heightAnchor.constraint(equalToConstant: 38).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 24).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 545).isActive = true




// Rectangle 16


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 352, height: 79)

view.backgroundColor = .white


shadows = UIView()

shadows.frame = view.frame

shadows.clipsToBounds = false

view.addSubview(shadows)


let shadowPath0 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 8)

let layer0 = CALayer()

layer0.shadowPath = shadowPath0.cgPath

layer0.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer0.shadowOpacity = 1

layer0.shadowRadius = 4

layer0.shadowOffset = CGSize(width: 0, height: 0)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)


let shadowPath1 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 8)

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


shapes.layer.cornerRadius = 8


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 352).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 11).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 617).isActive = true




// 24 / arrows / arrow-right


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 24, height: 24)

view.backgroundColor = .white


shadows = UIView()

shadows.frame = view.frame

shadows.clipsToBounds = false

view.addSubview(shadows)


let shadowPath0 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 0)

let layer0 = CALayer()

layer0.shadowPath = shadowPath0.cgPath

layer0.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer0.shadowOpacity = 1

layer0.shadowRadius = 4

layer0.shadowOffset = CGSize(width: 0, height: 4)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false




// Log out


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 210, height: 38)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 21)


// Line height: 25 pt


view.textAlignment = .center

view.text = "Log out"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 210).isActive = true

view.heightAnchor.constraint(equalToConstant: 38).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 24).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 642).isActive = true

