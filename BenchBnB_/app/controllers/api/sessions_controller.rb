class Api::SessionsController < ApplicationController

    def destroy
        if logged_in?
            logout!
            render json: {}
        else
            render json: ["cool beans but still missing"], status: 404
        end
    end

end
