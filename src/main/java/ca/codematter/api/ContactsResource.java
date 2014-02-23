package ca.codematter.api;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/contacts")
@Produces(MediaType.APPLICATION_JSON)
public class ContactsResource {
	
	private Map<String, Contact> contacts = new HashMap<String, Contact>();
	
	public ContactsResource() {
		
		for(int i = 0; i < 50; i++) {
			String firstName = "Raul " + i;
			contacts.put(firstName, new Contact(firstName, "Vieira", "Code Matter Development", "5555555555"));
		}
		
	}

	@GET
	@Path("/list")
	public Collection<Contact> list() {
		
		return contacts.values();
		
	}
	
	@GET
	@Path("/name/{contactName}")
	public Contact getContactByName(@PathParam("contactName") String contactName) {
		
		return contacts.get(contactName);
		
	}
	
}
