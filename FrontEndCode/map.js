// Rectangle 3


var view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 79)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.608, green: 0.318, blue: 0.878, alpha: 1).cgColor


var parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 0).isActive = true




// Map


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 294, height: 35)

view.backgroundColor = .white


view.textColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 28)


// Line height: 33 pt


view.textAlignment = .center

view.text = "Map"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 294).isActive = true

view.heightAnchor.constraint(equalToConstant: 35).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 38).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 22).isActive = true




// Rectangle 12


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 85)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.258, green: 0.258, blue: 0.258, alpha: 1).cgColor


parent = self.view!

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




// Rectangle 17


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 649)

view.backgroundColor = .white


let image0 = UIImage(named: "Screen Shot 2020-02-29 at 2.10.png")?.cgImage

let layer0 = CALayer()

layer0.contents = image0

layer0.transform = CATransform3DMakeAffineTransform(CGAffineTransform(a: 1.73, b: 0, c: 0, d: 1, tx: -0.36, ty: 0))

layer0.bounds = view.bounds

layer0.position = view.center

view.layer.addSublayer(layer0)



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 649).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 76).isActive = true




// Ellipse 1


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 45, height: 45)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.258, green: 0.258, blue: 0.258, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 45).isActive = true

view.heightAnchor.constraint(equalToConstant: 45).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 316).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 624).isActive = true




// Ellipse 2


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 45, height: 45)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.258, green: 0.258, blue: 0.258, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 45).isActive = true

view.heightAnchor.constraint(equalToConstant: 45).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 316).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 551).isActive = true




// 24 / maps / direction-45


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 24, height: 24)

view.backgroundColor = .white



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false




// 24 / maps / map


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 24, height: 24)

view.backgroundColor = .white



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false




// Rectangle 4


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 347, height: 43)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1).cgColor

view.layer.cornerRadius = 5


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 347).isActive = true

view.heightAnchor.constraint(equalToConstant: 43).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 14).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 88).isActive = true




// Search here


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 237, height: 22)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.31)

view.font = UIFont(name: "Roboto-Regular", size: 16)


// Line height: 19 pt


view.textAlignment = .center

view.text = "Search here"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 237).isActive = true

view.heightAnchor.constraint(equalToConstant: 22).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: -17).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 98).isActive = true


