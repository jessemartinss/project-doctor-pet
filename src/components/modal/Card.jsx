import React from 'react';
import { ButtonDefaultOrange } from '../buttons/Buttons';
import './Card.scss';

export default function Card() {
    return (
        <React.Fragment>
            <div class="modal fade" id="card" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content animate__animated animate__bounceInDown">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Your Cart</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3>No items found.</h3>
                            <a href="/shop">
                                <ButtonDefaultOrange value="Pet Shop"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
