// Results are only shared with people you authorize and simultaneously receive results from


var view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 289, height: 38)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 24)

view.numberOfLines = 0

view.lineBreakMode = .byWordWrapping


// Line height: 28 pt


view.textAlignment = .center

view.text = "Results are only shared with people you authorize and simultaneously receive results from"


var parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 289).isActive = true

view.heightAnchor.constraint(equalToConstant: 38).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 44).isActive = true

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


view.layer.backgroundColor = UIColor(red: 0.769, green: 0.769, blue: 0.769, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 18).isActive = true

view.heightAnchor.constraint(equalToConstant: 18).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 211).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 728).isActive = true




// Ellipse 6


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 18, height: 18)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.769, green: 0.769, blue: 0.769, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 18).isActive = true

view.heightAnchor.constraint(equalToConstant: 18).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 243).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 728).isActive = true




// Ellipse 4


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 18, height: 18)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.608, green: 0.318, blue: 0.878, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 18).isActive = true

view.heightAnchor.constraint(equalToConstant: 18).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 179).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 728).isActive = true




// iphone 1


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 254, height: 212)

view.backgroundColor = .white


let image0 = UIImage(named: "iphone.png")?.cgImage

let layer0 = CALayer()

layer0.contents = image0

layer0.transform = CATransform3DMakeAffineTransform(CGAffineTransform(a: 1, b: 0, c: 0, d: 1.2, tx: 0, ty: -0.1))

layer0.bounds = view.bounds

layer0.position = view.center

view.layer.addSublayer(layer0)



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 254).isActive = true

view.heightAnchor.constraint(equalToConstant: 212).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 61).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 134).isActive = true




// lock 1


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 78, height: 77)

view.backgroundColor = .white


let image0 = UIImage(named: "lock.png")?.cgImage

let layer0 = CALayer()

layer0.contents = image0

layer0.transform = CATransform3DMakeAffineTransform(CGAffineTransform(a: 1, b: 0, c: 0, d: 1.01, tx: 0, ty: -0.01))

layer0.bounds = view.bounds

layer0.position = view.center

view.layer.addSublayer(layer0)



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 78).isActive = true

view.heightAnchor.constraint(equalToConstant: 77).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 150).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 202).isActive = true




// Button


view = UILabel()

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


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 305).isActive = true

view.heightAnchor.constraint(equalToConstant: 58).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 35).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 598).isActive = true




// Go Back


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 168, height: 13)

view.backgroundColor = .white


view.textColor = UIColor(red: 0.608, green: 0.318, blue: 0.878, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 15)


// Line height: 18 pt


view.textAlignment = .center

view.text = "Go Back"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 168).isActive = true

view.heightAnchor.constraint(equalToConstant: 13).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 103).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 681).isActive = true




// Next


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 131, height: 17)

view.backgroundColor = .white


view.textColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 22)


// Line height: 26 pt


view.textAlignment = .center

view.text = "Next"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 131).isActive = true

view.heightAnchor.constraint(equalToConstant: 17).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 122).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 610).isActive = true

