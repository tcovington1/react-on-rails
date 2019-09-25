class Api::ItemsController < ApplicationController
  # controller give webpage, html, or JSON
  # we want to return JSON instead, so front end can use that object

  def index 
    # @items = Item.all
    render json: Item.all
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render json: @item
    else
      render json: { erros: @items.errors }, status: :unprocessable_entity
      # the status gives us a message saying something went wrong with backend
    end
  end

  def update
    @item = Item.find(params[:id])
    # if @item.update(item_param)
    #   ender json: @item
    # else
    #   render json: { erros: @items.errors }, status: :unprocessable_entity

    # end
    @item.update(complete: !@item.complete)
    render json: @item
  end

  def destroy
    Item.find(params[:id]).destroy
    render json: { message: 'Item deleted'}
  end


  private
  def item_params
    parms.require(:item).permit(:todo_name, :complete)
  end
end
