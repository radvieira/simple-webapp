package ca.codematter.api;

import java.io.Serializable;

public class Contact implements Serializable {
	
	private static final long serialVersionUID = 4295790549615191910L;

	private String firstName;
	private String lastName;
	private String company;
	private String phone;

	public Contact(String firstName, String lastName, String company, String phone) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.company = company;
		this.phone = phone;
	}


	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getCompany() {
		return company;
	}

	public String getPhone() {
		return phone;
	}

}
