class ContactsController < ApplicationController
	def list
		@contacts = Contact.all
	end

	def show
		@contact = Contact.find(params[:id])
	end

	def new
		@contact = Contact.new
	end

	def create
		@contact = Contact.new(contact_params)

		if @contact.save
			redirect_to :action => 'list'
		else
			render :action => new
		end
	end

	def contact_params
		params.require(:contact).permit(:First_Name, :Last_Name, :Date_of_Birth, :Phone, :Email, :Notes)
	end

	def edit
		@contact = Contact.find(params[:id])		
	end

	def update
		@contact = Contact.find(params[:id])

		if @contact.update_attributes(book_param)
			redirect_to :action => 'show', :id => @contact
		else
			render :action => 'edit'
		end
	end

	def delete
		Contact.find(params[:id]).destroy
		redirect_to :action => 'list'
	end
end
