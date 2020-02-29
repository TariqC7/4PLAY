// Rectangle 3


var view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 79)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.258, green: 0.258, blue: 0.258, alpha: 1).cgColor


var parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 0).isActive = true




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




// center_focus_strong_24px


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 35, height: 35)

view.backgroundColor = .white



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 35).isActive = true

view.heightAnchor.constraint(equalToConstant: 35).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 320).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 18).isActive = true




// Line 1


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 0)

view.backgroundColor = .white


var stroke = UIView()

stroke.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.center = view.center

view.addSubview(stroke)

view.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.layer.borderWidth = 1

stroke.layer.borderColor = UIColor(red: 0.783, green: 0.77, blue: 0.77, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 0).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 133).isActive = true




// Line 2


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 0)

view.backgroundColor = .white


stroke = UIView()

stroke.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.center = view.center

view.addSubview(stroke)

view.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.layer.borderWidth = 1

stroke.layer.borderColor = UIColor(red: 0.783, green: 0.77, blue: 0.77, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 0).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 214).isActive = true




// Messages


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 159, height: 27)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 22)


// Line height: 26 pt


view.textAlignment = .center

view.text = "Messages"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 159).isActive = true

view.heightAnchor.constraint(equalToConstant: 27).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 108).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 93).isActive = true




// Add


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 159, height: 27)

view.backgroundColor = .white


view.textColor = UIColor(red: 0.949, green: 0.949, blue: 0.949, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 22)


// Line height: 26 pt


view.textAlignment = .center

view.text = "Add"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 159).isActive = true

view.heightAnchor.constraint(equalToConstant: 27).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: -33).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 22).isActive = true




// Rectangle 4


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 79)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 134).isActive = true




// Line 3


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 0)

view.backgroundColor = .white


stroke = UIView()

stroke.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.center = view.center

view.addSubview(stroke)

view.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.layer.borderWidth = 1

stroke.layer.borderColor = UIColor(red: 0.783, green: 0.77, blue: 0.77, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 0).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 237).isActive = true




// Line 4


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 0)

view.backgroundColor = .white


stroke = UIView()

stroke.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.center = view.center

view.addSubview(stroke)

view.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.layer.borderWidth = 1

stroke.layer.borderColor = UIColor(red: 0.783, green: 0.77, blue: 0.77, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 0).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 318).isActive = true




// Rectangle 5


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 79)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 238).isActive = true




// Line 5


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 0)

view.backgroundColor = .white


stroke = UIView()

stroke.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.center = view.center

view.addSubview(stroke)

view.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.layer.borderWidth = 1

stroke.layer.borderColor = UIColor(red: 0.783, green: 0.77, blue: 0.77, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 0).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 342).isActive = true




// Line 6


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 0)

view.backgroundColor = .white


stroke = UIView()

stroke.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.center = view.center

view.addSubview(stroke)

view.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.layer.borderWidth = 1

stroke.layer.borderColor = UIColor(red: 0.783, green: 0.77, blue: 0.77, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 0).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 423).isActive = true




// Rectangle 6


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 79)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 343).isActive = true




// Line 7


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 0)

view.backgroundColor = .white


stroke = UIView()

stroke.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.center = view.center

view.addSubview(stroke)

view.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.layer.borderWidth = 1

stroke.layer.borderColor = UIColor(red: 0.783, green: 0.77, blue: 0.77, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 0).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 447).isActive = true




// Line 8


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 0)

view.backgroundColor = .white


stroke = UIView()

stroke.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.center = view.center

view.addSubview(stroke)

view.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.layer.borderWidth = 1

stroke.layer.borderColor = UIColor(red: 0.783, green: 0.77, blue: 0.77, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 0).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 528).isActive = true




// Rectangle 7


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 79)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 448).isActive = true




// Rectangle 8


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 79)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 448).isActive = true




// Line 9


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 0)

view.backgroundColor = .white


stroke = UIView()

stroke.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.center = view.center

view.addSubview(stroke)

view.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.layer.borderWidth = 1

stroke.layer.borderColor = UIColor(red: 0.783, green: 0.77, blue: 0.77, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 0).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 553).isActive = true




// Line 10


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 0)

view.backgroundColor = .white


stroke = UIView()

stroke.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.center = view.center

view.addSubview(stroke)

view.bounds = view.bounds.insetBy(dx: -0.5, dy: -0.5)

stroke.layer.borderWidth = 1

stroke.layer.borderColor = UIColor(red: 0.783, green: 0.77, blue: 0.77, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 0).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 634).isActive = true




// Rectangle 9


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 79)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 554).isActive = true




// Rectangle 10


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 79)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 79).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 554).isActive = true




// Message Button


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 105, height: 43)

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

view.widthAnchor.constraint(equalToConstant: 105).isActive = true

view.heightAnchor.constraint(equalToConstant: 43).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 255).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 148).isActive = true




// Button


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 105, height: 43)

view.backgroundColor = .white


shadows = UIView()

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

view.widthAnchor.constraint(equalToConstant: 105).isActive = true

view.heightAnchor.constraint(equalToConstant: 43).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 255).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 466).isActive = true




// Button


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 105, height: 43)

view.backgroundColor = .white


shadows = UIView()

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

view.widthAnchor.constraint(equalToConstant: 105).isActive = true

view.heightAnchor.constraint(equalToConstant: 43).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 255).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 572).isActive = true




// Button


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 105, height: 43)

view.backgroundColor = .white


shadows = UIView()

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

view.widthAnchor.constraint(equalToConstant: 105).isActive = true

view.heightAnchor.constraint(equalToConstant: 43).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 255).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 361).isActive = true




// Button


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 105, height: 43)

view.backgroundColor = .white


shadows = UIView()

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

view.widthAnchor.constraint(equalToConstant: 105).isActive = true

view.heightAnchor.constraint(equalToConstant: 43).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 255).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 252).isActive = true




// Shanice Sinclair


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 148, height: 38)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 20)


// Line height: 23 pt


view.textAlignment = .center

view.text = "Shanice Sinclair"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 148).isActive = true

view.heightAnchor.constraint(equalToConstant: 38).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 34).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 159).isActive = true




// Latroya Watson


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 148, height: 38)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 20)


// Line height: 23 pt


view.textAlignment = .center

view.text = "Latroya Watson"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 148).isActive = true

view.heightAnchor.constraint(equalToConstant: 38).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 37).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 579).isActive = true




// Camille Brown


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 148, height: 38)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 20)


// Line height: 23 pt


view.textAlignment = .center

view.text = "Camille Brown"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 148).isActive = true

view.heightAnchor.constraint(equalToConstant: 38).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 34).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 475).isActive = true




// Taylor Scott


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 148, height: 38)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 20)


// Line height: 23 pt


view.textAlignment = .center

view.text = "Taylor Scott"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 148).isActive = true

view.heightAnchor.constraint(equalToConstant: 38).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 34).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 370).isActive = true




// Troi Sharpp


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 148, height: 38)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 20)


// Line height: 23 pt


view.textAlignment = .center

view.text = "Troi Sharpp"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 148).isActive = true

view.heightAnchor.constraint(equalToConstant: 38).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 34).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 260).isActive = true




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




// Button


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 303, height: 43)

view.backgroundColor = .white


shadows = UIView()

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


