class SchedulesController < InheritedResources::Base

  private

    def schedule_params
      params.require(:schedule).permit(:lot_id, :date_parking_start, :date_parking_end)
    end

end
