class EventsController < ApplicationController
  before_action :get_lot
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    @events = @lot.events
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
  end

  # GET /posts/new
  def new
    @event = @lot.events.build
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @event = @lot.events.build(event_params)

        respond_to do |format|
         if @event.save  
            format.html { redirect_to lot_events_path(@lot), notice: 'Post was successfully created.' }
            format.json { render :show, status: :created, location: @event }
         else
            format.html { render :new }
            format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @event.update(event_params)
        format.html { redirect_to lot_event_path(@lot), notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @event }
      else
        format.html { render :edit }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @event.destroy
    respond_to do |format|
      format.html { redirect_to lot_events_path(@lot), notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


  private

    def get_lot
      @lot = Lot.find(params[:lot_id])
    end
    
    def set_post
      @event = @lot.events.find(params[:id])  
    end

    def event_params
      params.require(:event).permit(:lot_id, :date_parking_start, :date_parking_end, :car_id)
    end

end
