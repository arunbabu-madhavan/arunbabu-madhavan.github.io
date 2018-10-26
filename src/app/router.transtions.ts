

import {sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild} from '@angular/animations';


export const routerTransition = trigger('routerTransition', [



    transition( '* => article', [
        q(':enter', style({ position: 'fixed', width:'100%' }),{ optional: true }),
        group([  q(' :enter', 
        [
            style({ opacity: 0 , transform: 'translateY(-100%)'})
        ], 
        { optional: true }
    ),
    
    
    q(':enter', 
        [
            style({ opacity: 0, transform: 'translateY(-100%)' }),
            animate('750ms ease-in-out', style({ opacity: 1 ,transform: 'translateY(0)'}))
        ], 
        { optional: true }
    )])
    
    ]),

transition( '* => profile', [
    q(':enter', style({ position: 'fixed', width:'100%' }),{ optional: true }),
    group([  q(' :enter', 
    [
        style({ opacity: 0 , transform: 'scale(3)'})
    ], 
    { optional: true }
),


q(':enter', 
    [
        style({ opacity: 0, transform: 'scale(3)' }),
        animate('750ms ease-in-out', style({ opacity: 1 ,transform: 'scale(1)'}))
    ], 
    { optional: true }
)])

]),


transition( '* => about', [
    q(':enter', style({ position: 'fixed', width:'100%' }),{ optional: true }),
    group([  q(' :enter', 
        [
            style({ opacity: 0 , transform: 'scale(2)'})
        ], 
        { optional: true }
    ),


    q(':enter', 
        [
            style({ opacity: 0, transform: 'scale(2)' }),
            animate('750ms ease-in-out', style({ opacity: 1 ,transform: 'scale(1)'}))
        ], 
        { optional: true }
    )])


]),


transition( '* => articles', [
    q(':enter', style({ position: 'fixed', width:'100%' }),{ optional: true }),
    group([  q(' :enter', 
        [
            style({ opacity: 0 , transform: 'scale(2)'})
        ], 
        { optional: true }
    ),


    q(':enter', 
        [
            style({ opacity: 0, transform: 'scale(2)' }),
            animate('750ms ease-in-out', style({ opacity: 1 ,transform: 'scale(1)'}))
        ], 
        { optional: true }
    )])


]),






transition( '* => project', [
    q(':enter', style({  opacity: 0 , transform: 'scale(0)'}),{ optional: true }),
    group([  q(' :enter', 
        [
            style({ opacity: 1 , transform: 'scale(1)'})
        ], 
        { optional: true }
    ),

    q(':enter', 
        [
            style({ opacity: 0, transform: 'scale(0)' }),
            animate('450ms ease-in-out', style({ opacity: 1 ,transform: 'scale(1)'}))
        ], 
        { optional: true }
    )])

]),


transition( '* => projects', [
    q(':enter', style({ position: 'fixed', width:'100%' }),{ optional: true }),
    group([  q(' :enter', 
        [
            style({ opacity: 0 , transform: 'scale(0)'})
        ], 
        { optional: true }
    ),


    q(':enter', 
        [
            style({ opacity: 0, transform: 'scale(0)' }),
            animate('750ms ease-in-out', style({ opacity: 1 ,transform: 'scale(1)'}))
        ], 
        { optional: true }
    )])


]),
 
]);
