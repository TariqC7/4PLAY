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




// Line 11


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

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 731).isActive = true




// Rectangle 11


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 78)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 1, green: 1, blue: 1, alpha: 1).cgColor


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 78).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 734).isActive = true




// UI Bars / Home Indicator / Home Indicator - On Light


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 375, height: 34)

view.backgroundColor = .white


view.alpha = 0.1


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 375).isActive = true

view.heightAnchor.constraint(equalToConstant: 34).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 0).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 778).isActive = true




// Write a message . . .


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 237, height: 37)

view.backgroundColor = .white


view.textColor = UIColor(red: 0.784, green: 0.769, blue: 0.769, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 18)


// Line height: 21 pt


view.textAlignment = .center

view.text = "Write a message . . ."


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 237).isActive = true

view.heightAnchor.constraint(equalToConstant: 37).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: -22).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 754).isActive = true




// keyboard_backspace_24px


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 24, height: 24)

view.backgroundColor = .white



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 24).isActive = true

view.heightAnchor.constraint(equalToConstant: 24).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 294).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 778).isActive = true




// filter_none_24px


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 24, height: 24)

view.backgroundColor = .white



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 24).isActive = true

view.heightAnchor.constraint(equalToConstant: 24).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 319).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 754).isActive = true




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




// playbutton 1


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 385, height: 397)

view.backgroundColor = .white


view.alpha = 0.5

let image0 = UIImage(named: "playbutton.png")?.cgImage

let layer0 = CALayer()

layer0.contents = image0

layer0.transform = CATransform3DMakeAffineTransform(CGAffineTransform(a: 1.44, b: 0, c: 0, d: 1, tx: -0.22, ty: 0))

layer0.bounds = view.bounds

layer0.position = view.center

view.layer.addSublayer(layer0)



parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 385).isActive = true

view.heightAnchor.constraint(equalToConstant: 397).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: -4).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 88).isActive = true




// You’re good to go! Most recent test date: 02/28/2020


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 272, height: 100)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 18)

view.numberOfLines = 0

view.lineBreakMode = .byWordWrapping


// Line height: 21 pt


view.textAlignment = .center

view.text = "You’re good to go!\nMost recent test date: 02/28/2020\n\n"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 272).isActive = true

view.heightAnchor.constraint(equalToConstant: 100).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 53).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 468).isActive = true




// Rectangle 23


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 332, height: 60)

view.backgroundColor = .white


view.layer.backgroundColor = UIColor(red: 0.855, green: 0.855, blue: 0.855, alpha: 1).cgColor

view.layer.cornerRadius = 10


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 332).isActive = true

view.heightAnchor.constraint(equalToConstant: 60).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 22).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 585).isActive = true




// Remember safe is sexy!


view = UILabel()

view.frame = CGRect(x: 0, y: 0, width: 293, height: 34)

view.backgroundColor = .white


view.textColor = UIColor(red: 0, green: 0, blue: 0, alpha: 1)

view.font = UIFont(name: "Roboto-Bold", size: 18)


// Line height: 21 pt


view.textAlignment = .center

view.text = "Remember safe is sexy!"


parent = self.view!

parent.addSubview(view)

view.translatesAutoresizingMaskIntoConstraints = false

view.widthAnchor.constraint(equalToConstant: 293).isActive = true

view.heightAnchor.constraint(equalToConstant: 34).isActive = true

view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: 42).isActive = true

view.topAnchor.constraint(equalTo: parent.topAnchor, constant: 605).isActive = true

