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




// arrow_forward_ios_24px


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 24, height: 24)

view.backgroundColor = .white



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 24).isActive = true

view.heightAnchor.constraint(equalToConstant: 24).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 48).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 51).isActive = true




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




// Rectangle 21


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 343, height: 575)

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

view.heightAnchor.constraint(equalToConstant: 575).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 16).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 116).isActive = true




// home_slide_4 3


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 91, height: 84)

view.backgroundColor = .white


let image0 = UIImage(named: "home_slide_2.png")?.cgImage

let layer0 = CALayer()

layer0.contents = image0

layer0.transform = CATransform3DMakeAffineTransform(CGAffineTransform(a: 1, b: 0, c: 0, d: 1.22, tx: 0, ty: -0.11))

layer0.bounds = view.bounds

layer0.position = view.center

view.layer.addSublayer(layer0)


view.layer.cornerRadius = 9


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 91).isActive = true

view.heightAnchor.constraint(equalToConstant: 84).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 29).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 134).isActive = true




// Did you know that about half of sexually active teens and young adults will get an STD before their 25th birthday – and many of them will have no idea? Abstaining from sex is the only 100% way of protecting yourself from getting an STD – or giving one to someone else. But if you are having any kind of sex, or thinking about getting started, learn about STD prevention and transmission below and use condoms to protect yourself and your partner. Since the most common symptom of STDs is having no symptoms at all, it’s important to get tested and treated as soon as possible. STDs are easy to treat, but if left undetected, they can cause long-term health problems. What are you waiting for? If you’re between 13 and 24 getting tested is easy and affordable. Just find a clinic and make an appointment. Curious about what going to a clinic is like? View one of our clinic tours.


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 307, height: 412)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Regular", size: 16)

view.numberOfLines = 0

view.lineBreakMode = .byWordWrapping


// Line height: 19 pt


view.text = "Did you know that about half of sexually active teens and young adults will get an STD before their 25th birthday – and many of them will have no idea? Abstaining from sex is the only 100% way of protecting yourself from getting an STD – or giving one to someone else. But if you are having any kind of sex, or thinking about getting started, learn about STD prevention and transmission below and use condoms to protect yourself and your partner. Since the most common symptom of STDs is having no symptoms at all, it’s important to get tested and treated as soon as possible. STDs are easy to treat, but if left undetected, they can cause long-term health problems. What are you waiting for?
If you’re between 13 and 24 getting tested is easy and affordable. Just find a clinic and make an appointment.
\nCurious about what going to a clinic is like? View one of our clinic tours."


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 307).isActive = true

view.heightAnchor.constraint(equalToConstant: 412).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 32).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 240).isActive = true




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

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 112).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 186).isActive = true




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

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 141).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 134).isActive = true




// Share


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 134, height: 16)

view.backgroundColor = .white


view.textColor = UIColor(red: 0.608, green: 0.318, blue: 0.878, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 24)


// Line height: 28 pt


view.text = "Share"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 134).isActive = true

view.heightAnchor.constraint(equalToConstant: 16).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 280).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 654).isActive = true


