// Button


var view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 305, height: 58)

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


var parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 305).isActive = true

view.heightAnchor.constraint(equalToConstant: 58).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 35).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 556).isActive = true




// Button


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 305, height: 58)

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

layer0.shadowOffset = CGSize(width: 0, height: 0)

layer0.bounds = shadows.bounds

layer0.position = shadows.center

shadows.layer.addSublayer(layer0)


let shadowPath1 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 0)

let layer1 = CALayer()

layer1.shadowPath = shadowPath1.cgPath

layer1.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer1.shadowOpacity = 1

layer1.shadowRadius = 4

layer1.shadowOffset = CGSize(width: 0, height: 0)

layer1.bounds = shadows.bounds

layer1.position = shadows.center

shadows.layer.addSublayer(layer1)


let shadowPath2 = UIBezierPath(roundedRect: shadows.bounds, cornerRadius: 0)

let layer2 = CALayer()

layer2.shadowPath = shadowPath2.cgPath

layer2.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.25).cgColor

layer2.shadowOpacity = 1

layer2.shadowRadius = 4

layer2.shadowOffset = CGSize(width: 0, height: 0)

layer2.bounds = shadows.bounds

layer2.position = shadows.center

shadows.layer.addSublayer(layer2)


view.layer.backgroundColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 305).isActive = true

view.heightAnchor.constraint(equalToConstant: 58).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 36).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 632).isActive = true




// New around here?


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 247, height: 19)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 15)


// Line height: 18 pt


view.textAlignment = .center

view.text = "New around here?"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 247).isActive = true

view.heightAnchor.constraint(equalToConstant: 19).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 31).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 708).isActive = true




// Sign Up


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 168, height: 13)

view.backgroundColor = .white


view.textColor = UIColor(red: 0.608, green: 0.318, blue: 0.878, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 15)


// Line height: 18 pt


view.textAlignment = .center

view.text = "Sign Up"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 168).isActive = true

view.heightAnchor.constraint(equalToConstant: 13).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 162).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 708).isActive = true




// Know before you go.


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 220, height: 38)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 20)


// Line height: 23 pt


view.textAlignment = .center

view.text = "Know before you go."


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 220).isActive = true

view.heightAnchor.constraint(equalToConstant: 38).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 78).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 406).isActive = true




// 4playfinal 1


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 400, height: 400)

view.backgroundColor = .white



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 400).isActive = true

view.heightAnchor.constraint(equalToConstant: 400).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: -25).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 24).isActive = true

